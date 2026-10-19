export interface Theme { readonly id: string; readonly name: string; readonly mode: 'light' | 'dark'; readonly tokens: Readonly<Record<string,string>>; }
export declare const themes: {readonly light: Theme; readonly dark: Theme};
export declare const light: Theme;
export declare const dark: Theme;
export declare const version: string;
export declare const heritage: Readonly<Record<string,string>>;
export declare const design: { readonly radius: Readonly<Record<string,string>>; readonly spacing: Readonly<Record<string,string>>; readonly fonts: Readonly<Record<string,string>> };
export default themes;
