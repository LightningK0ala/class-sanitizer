/**
 * Sanitizer performs sanitation of the given object based on its metadata.
 */
export declare class Sanitizer {
    private _container;
    private metadataStorage;
    container: {
        get(type: Function): any;
    };
    /**
     * Performs sanitation of the given object based on annotations used in given object class.
     */
    sanitize(object: any): void;
    /**
     * Performs sanitation of the given object based on annotations used in given object class.
     * Performs in async-style, useful to use it in chained promises.
     */
    sanitizeAsync<T>(object: T): Promise<T>;
    /**
     * Remove characters that appear in the blacklist. The characters are used in a RegExp and so you will need to
     * escape some chars, e.g @Blacklist('\\[\\]')
     */
    blacklist(str: string, chars: string): string;
    blacklist(str: string, chars: RegExp): string;
    /**
     * Replace <, >, &, ', " and / with HTML entities.
     */
    escape(str: string): string;
    /**
     * Trim characters from the left-side of the input.
     */
    ltrim(str: string, chars?: string[]): string;
    /**
     * Canonicalize an email address.
     */
    normalizeEmail(str: string, lowercase?: boolean): string | false;
    /**
     * Trim characters from the right-side of the input.
     */
    rtrim(str: string, chars?: string[]): string;
    /**
     * Remove characters with a numerical value < 32 and 127, mostly control characters.
     * If keepNewLines is true, newline characters are preserved (\n and \r, hex 0xA and 0xD).
     * Unicode-safe in JavaScript.
     */
    stripLow(str: string, keepNewLines?: boolean): string;
    /**
     * Convert the input to a boolean.
     * Everything except for '0', 'false' and '' returns true. In strict mode only '1' and 'true' return true.
     */
    toBoolean(input: any, isStrict?: boolean): boolean;
    /**
     * Convert the input to a date, or null if the input is not a date.
     */
    toDate(input: any): Date;
    /**
     * Convert the input to a float.
     */
    toFloat(input: any): number;
    /**
     * Convert the input to an integer, or NaN if the input is not an integer.
     */
    toInt(input: any, radix?: number): number;
    /**
     * Convert the input to a string.
     */
    toString(input: any): string;
    /**
     * Trim characters (whitespace by default) from both sides of the input. You can specify chars that should be trimmed.
     */
    trim(str: string, chars?: string[]): string;
    /**
     * Remove characters that do not appear in the whitelist.
     * The characters are used in a RegExp and so you will need to escape some chars, e.g. whitelist(input, '\\[\\]').
     */
    whitelist(str: string, chars: string): string;
    whitelist(str: string, chars: RegExp): string;
    private sanitizeValue(value, metadata);
    private createInstance(object);
}
