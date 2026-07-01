import vi from './lang/vi';

type DeepWiden<T> = T extends string
  ? string
  : T extends readonly (infer Item)[]
    ? readonly DeepWiden<Item>[]
    : T extends object
      ? { [Key in keyof T]: DeepWiden<T[Key]> }
      : T;

export type Translations = DeepWiden<typeof vi>;
export type Locale = 'vi' | 'en';
