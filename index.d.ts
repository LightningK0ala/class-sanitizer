import { Sanitizer } from "./Sanitizer";
export * from "./decorators";
export * from "./Sanitizer";
export * from "./SanitizerInterface";
declare const sanitizer: Sanitizer;
export default sanitizer;
export declare function sanitize(object: any): void;
export declare function sanitizeAsync<T>(object: T): Promise<T>;
