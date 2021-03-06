/**
 * Options used to pass to sanitation decorators.
 */
export interface SanitationOptions {
    /**
     * Specifies if sanity value is an array and each of its item must be sanitized.
     */
    each?: boolean;
}
/**
 * Decorator used to register custom sanitizer.
 */
export declare function SanitizerConstraint(): (object: Function) => void;
/**
 * Performs sanitation based on the given custom constraint.
 */
export declare function Sanitize(constraintClass: Function, annotationOptions?: SanitationOptions): (object: Object, propertyName: string) => void;
/**
 * Remove characters that appear in the blacklist. The characters are used in a RegExp and so you will need to
 * escape some chars, e.g @Blacklist('\\[\\]')
 */
export declare function Blacklist(chars: RegExp, annotationOptions?: SanitationOptions): (object: Object, propertyName: string) => void;
/**
 * Replace <, >, &, ', " and / with HTML entities.
 */
export declare function Escape(annotationOptions?: SanitationOptions): (object: Object, propertyName: string) => void;
/**
 * Trim characters from the left-side of the input.
 */
export declare function Ltrim(chars?: string[], annotationOptions?: SanitationOptions): (object: Object, propertyName: string) => void;
/**
 * Canonicalize an email address.
 */
export declare function NormalizeEmail(lowercase?: boolean, annotationOptions?: SanitationOptions): (object: Object, propertyName: string) => void;
/**
 * Trim characters from the right-side of the input.
 */
export declare function Rtrim(chars?: string[], annotationOptions?: SanitationOptions): (object: Object, propertyName: string) => void;
/**
 * Remove characters with a numerical value < 32 and 127, mostly control characters.
 * If keepNewLines is true, newline characters are preserved (\n and \r, hex 0xA and 0xD).
 * Unicode-safe in JavaScript.
 */
export declare function StripLow(keepNewLines?: boolean, annotationOptions?: SanitationOptions): (object: Object, propertyName: string) => void;
/**
 * Convert the input to a boolean.
 * Everything except for '0', 'false' and '' returns true. In strict mode only '1' and 'true' return true.
 */
export declare function ToBoolean(isStrict?: boolean, annotationOptions?: SanitationOptions): (object: Object, propertyName: string) => void;
/**
 * Convert the input to a date, or null if the input is not a date.
 */
export declare function ToDate(annotationOptions?: SanitationOptions): (object: Object, propertyName: string) => void;
/**
 * Convert the input to a float.
 */
export declare function ToFloat(annotationOptions?: SanitationOptions): (object: Object, propertyName: string) => void;
/**
 * Convert the input to an integer, or NaN if the input is not an integer.
 */
export declare function ToInt(radix?: number, annotationOptions?: SanitationOptions): (object: Object, propertyName: string) => void;
/**
 * Convert the input to a string.
 */
export declare function ToString(annotationOptions?: SanitationOptions): (object: Object, propertyName: string) => void;
/**
 * Trim characters (whitespace by default) from both sides of the input. You can specify chars that should be trimmed.
 */
export declare function Trim(chars?: string[], annotationOptions?: SanitationOptions): (object: Object, propertyName: string) => void;
/**
 * Remove characters that do not appear in the whitelist.
 * The characters are used in a RegExp and so you will need to escape some chars, e.g. whitelist(input, '\\[\\]').
 */
export declare function Whitelist(chars: RegExp, annotationOptions?: SanitationOptions): (object: Object, propertyName: string) => void;
/**
 * Indicates if nested object should be sanitized as well.
 */
export declare function SanitizeNested(annotationOptions?: SanitationOptions): (object: Object, propertyName: string) => void;
