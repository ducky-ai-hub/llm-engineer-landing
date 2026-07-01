import { useEffect, useRef } from 'react';

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      theme: 'dark';
      callback: (token: string) => void;
      'error-callback': (errorCode: string) => void;
      'expired-callback': () => void;
    },
  ) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const scriptId = 'cloudflare-turnstile-script';
let scriptPromise: Promise<TurnstileApi> | null = null;

function loadTurnstile(): Promise<TurnstileApi> {
  if (window.turnstile) {
    return Promise.resolve(window.turnstile);
  }

  if (scriptPromise) {
    return scriptPromise;
  }

  scriptPromise = new Promise((resolve, reject) => {
    const handleLoad = () => {
      if (window.turnstile) {
        resolve(window.turnstile);
      } else {
        reject(new Error('Turnstile API is unavailable.'));
      }
    };

    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.addEventListener('load', handleLoad, { once: true });
      existingScript.addEventListener(
        'error',
        () => reject(new Error('Unable to load Turnstile script.')),
        { once: true },
      );
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src =
      'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.addEventListener('load', handleLoad, { once: true });
    script.addEventListener(
      'error',
      () => reject(new Error('Unable to load Turnstile script.')),
      { once: true },
    );
    document.head.appendChild(script);
  });

  return scriptPromise;
}

type TurnstileProps = {
  siteKey: string;
  verificationError: string;
  loadError: string;
  onError: (message: string) => void;
  onExpire: () => void;
  onVerify: (token: string) => void;
};

export default function Turnstile({
  siteKey,
  verificationError,
  loadError,
  onError,
  onExpire,
  onVerify,
}: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !siteKey) {
      return;
    }

    let cancelled = false;
    let widgetId: string | undefined;

    loadTurnstile()
      .then((turnstile) => {
        if (cancelled) {
          return;
        }

        widgetId = turnstile.render(container, {
          sitekey: siteKey,
          action: 'course_registration',
          theme: 'dark',
          callback: onVerify,
          'expired-callback': onExpire,
          'error-callback': (errorCode) => {
            onError(verificationError.replace('{code}', errorCode));
          },
        });
      })
      .catch(() => {
        if (!cancelled) {
          onError(loadError);
        }
      });

    return () => {
      cancelled = true;

      if (widgetId && window.turnstile) {
        window.turnstile.remove(widgetId);
      }
    };
  }, [loadError, onError, onExpire, onVerify, siteKey, verificationError]);

  return <div ref={containerRef} className="absolute h-0 w-0" />;
}
