import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, resolve, sep } from 'node:path';

const host = '0.0.0.0';
const port = Number.parseInt(process.env.PORT ?? '3000', 10);
const publicDirectory = join(import.meta.dirname, 'dist');
const indexFile = join(publicDirectory, 'index.html');

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function sendFile(request, response, filePath) {
  const headers = {
    'Content-Type': contentTypes[extname(filePath)] ?? 'application/octet-stream',
  };

  if (filePath.startsWith(join(publicDirectory, 'assets') + sep)) {
    headers['Cache-Control'] = 'public, max-age=31536000, immutable';
  }

  response.writeHead(200, headers);

  if (request.method === 'HEAD') {
    response.end();
    return;
  }

  createReadStream(filePath).pipe(response);
}

const server = createServer(async (request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end();
    return;
  }

  try {
    const pathname = decodeURIComponent(
      new URL(request.url ?? '/', 'http://localhost').pathname,
    );
    const requestedPath = resolve(publicDirectory, `.${pathname}`);
    const isInsidePublicDirectory =
      requestedPath === publicDirectory ||
      requestedPath.startsWith(publicDirectory + sep);

    if (isInsidePublicDirectory) {
      const fileStats = await stat(requestedPath).catch(() => null);

      if (fileStats?.isFile()) {
        sendFile(request, response, requestedPath);
        return;
      }
    }

    sendFile(request, response, indexFile);
  } catch {
    response.writeHead(400);
    response.end('Bad Request');
  }
});

server.listen(port, host, () => {
  console.log(`Static server listening on http://${host}:${port}`);
});
