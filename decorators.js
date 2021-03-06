"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MetadataStorage_1 = require("./metadata/MetadataStorage");
var SanitizeTypes_1 = require("./SanitizeTypes");
/**
 * Decorator used to register custom sanitizer.
 */
function SanitizerConstraint() {
    return function (object) {
        MetadataStorage_1.defaultMetadataStorage.addConstraintMetadata({
            object: object
        });
    };
}
exports.SanitizerConstraint = SanitizerConstraint;
/**
 * Performs sanitation based on the given custom constraint.
 */
function Sanitize(constraintClass, annotationOptions) {
    return function (object, propertyName) {
        MetadataStorage_1.defaultMetadataStorage.addSanitationMetadata({
            type: SanitizeTypes_1.SanitizeTypes.CUSTOM_SANITIZATION,
            object: object,
            propertyName: propertyName,
            value1: constraintClass,
            each: annotationOptions && annotationOptions.each ? annotationOptions.each : undefined
        });
    };
}
exports.Sanitize = Sanitize;
/**
 * Remove characters that appear in the blacklist. The characters are used in a RegExp and so you will need to
 * escape some chars, e.g @Blacklist('\\[\\]')
 */
function Blacklist(chars, annotationOptions) {
    return function (object, propertyName) {
        MetadataStorage_1.defaultMetadataStorage.addSanitationMetadata({
            type: SanitizeTypes_1.SanitizeTypes.BLACKLIST,
            object: object,
            propertyName: propertyName,
            value1: chars,
            each: annotationOptions && annotationOptions.each ? annotationOptions.each : undefined
        });
    };
}
exports.Blacklist = Blacklist;
/**
 * Replace <, >, &, ', " and / with HTML entities.
 */
function Escape(annotationOptions) {
    return function (object, propertyName) {
        MetadataStorage_1.defaultMetadataStorage.addSanitationMetadata({
            type: SanitizeTypes_1.SanitizeTypes.ESCAPE,
            object: object,
            propertyName: propertyName,
            each: annotationOptions && annotationOptions.each ? annotationOptions.each : undefined
        });
    };
}
exports.Escape = Escape;
/**
 * Trim characters from the left-side of the input.
 */
function Ltrim(chars, annotationOptions) {
    return function (object, propertyName) {
        MetadataStorage_1.defaultMetadataStorage.addSanitationMetadata({
            type: SanitizeTypes_1.SanitizeTypes.LTRIM,
            object: object,
            propertyName: propertyName,
            value1: chars,
            each: annotationOptions && annotationOptions.each ? annotationOptions.each : undefined
        });
    };
}
exports.Ltrim = Ltrim;
/**
 * Canonicalize an email address.
 */
function NormalizeEmail(lowercase, annotationOptions) {
    return function (object, propertyName) {
        MetadataStorage_1.defaultMetadataStorage.addSanitationMetadata({
            type: SanitizeTypes_1.SanitizeTypes.NORMALIZE_EMAIL,
            object: object,
            propertyName: propertyName,
            value1: lowercase,
            each: annotationOptions && annotationOptions.each ? annotationOptions.each : undefined
        });
    };
}
exports.NormalizeEmail = NormalizeEmail;
/**
 * Trim characters from the right-side of the input.
 */
function Rtrim(chars, annotationOptions) {
    return function (object, propertyName) {
        MetadataStorage_1.defaultMetadataStorage.addSanitationMetadata({
            type: SanitizeTypes_1.SanitizeTypes.RTRIM,
            object: object,
            propertyName: propertyName,
            value1: chars,
            each: annotationOptions && annotationOptions.each ? annotationOptions.each : undefined
        });
    };
}
exports.Rtrim = Rtrim;
/**
 * Remove characters with a numerical value < 32 and 127, mostly control characters.
 * If keepNewLines is true, newline characters are preserved (\n and \r, hex 0xA and 0xD).
 * Unicode-safe in JavaScript.
 */
function StripLow(keepNewLines, annotationOptions) {
    return function (object, propertyName) {
        MetadataStorage_1.defaultMetadataStorage.addSanitationMetadata({
            type: SanitizeTypes_1.SanitizeTypes.STRIP_LOW,
            object: object,
            propertyName: propertyName,
            value1: keepNewLines,
            each: annotationOptions && annotationOptions.each ? annotationOptions.each : undefined
        });
    };
}
exports.StripLow = StripLow;
/**
 * Convert the input to a boolean.
 * Everything except for '0', 'false' and '' returns true. In strict mode only '1' and 'true' return true.
 */
function ToBoolean(isStrict, annotationOptions) {
    return function (object, propertyName) {
        MetadataStorage_1.defaultMetadataStorage.addSanitationMetadata({
            type: SanitizeTypes_1.SanitizeTypes.TO_BOOLEAN,
            object: object,
            propertyName: propertyName,
            value1: isStrict,
            each: annotationOptions && annotationOptions.each ? annotationOptions.each : undefined
        });
    };
}
exports.ToBoolean = ToBoolean;
/**
 * Convert the input to a date, or null if the input is not a date.
 */
function ToDate(annotationOptions) {
    return function (object, propertyName) {
        MetadataStorage_1.defaultMetadataStorage.addSanitationMetadata({
            type: SanitizeTypes_1.SanitizeTypes.TO_DATE,
            object: object,
            propertyName: propertyName,
            each: annotationOptions && annotationOptions.each ? annotationOptions.each : undefined
        });
    };
}
exports.ToDate = ToDate;
/**
 * Convert the input to a float.
 */
function ToFloat(annotationOptions) {
    return function (object, propertyName) {
        MetadataStorage_1.defaultMetadataStorage.addSanitationMetadata({
            type: SanitizeTypes_1.SanitizeTypes.TO_FLOAT,
            object: object,
            propertyName: propertyName,
            each: annotationOptions && annotationOptions.each ? annotationOptions.each : undefined
        });
    };
}
exports.ToFloat = ToFloat;
/**
 * Convert the input to an integer, or NaN if the input is not an integer.
 */
function ToInt(radix, annotationOptions) {
    return function (object, propertyName) {
        MetadataStorage_1.defaultMetadataStorage.addSanitationMetadata({
            type: SanitizeTypes_1.SanitizeTypes.TO_INT,
            object: object,
            propertyName: propertyName,
            value1: radix,
            each: annotationOptions && annotationOptions.each ? annotationOptions.each : undefined
        });
    };
}
exports.ToInt = ToInt;
/**
 * Convert the input to a string.
 */
function ToString(annotationOptions) {
    return function (object, propertyName) {
        MetadataStorage_1.defaultMetadataStorage.addSanitationMetadata({
            type: SanitizeTypes_1.SanitizeTypes.TO_STRING,
            object: object,
            propertyName: propertyName,
            each: annotationOptions && annotationOptions.each ? annotationOptions.each : undefined
        });
    };
}
exports.ToString = ToString;
/**
 * Trim characters (whitespace by default) from both sides of the input. You can specify chars that should be trimmed.
 */
function Trim(chars, annotationOptions) {
    return function (object, propertyName) {
        MetadataStorage_1.defaultMetadataStorage.addSanitationMetadata({
            type: SanitizeTypes_1.SanitizeTypes.TRIM,
            object: object,
            propertyName: propertyName,
            value1: chars,
            each: annotationOptions && annotationOptions.each ? annotationOptions.each : undefined
        });
    };
}
exports.Trim = Trim;
/**
 * Remove characters that do not appear in the whitelist.
 * The characters are used in a RegExp and so you will need to escape some chars, e.g. whitelist(input, '\\[\\]').
 */
function Whitelist(chars, annotationOptions) {
    return function (object, propertyName) {
        MetadataStorage_1.defaultMetadataStorage.addSanitationMetadata({
            type: SanitizeTypes_1.SanitizeTypes.WHITELIST,
            object: object,
            propertyName: propertyName,
            value1: chars,
            each: annotationOptions && annotationOptions.each ? annotationOptions.each : undefined
        });
    };
}
exports.Whitelist = Whitelist;
/**
 * Indicates if nested object should be sanitized as well.
 */
function SanitizeNested(annotationOptions) {
    return function (object, propertyName) {
        MetadataStorage_1.defaultMetadataStorage.addSanitationMetadata({
            type: SanitizeTypes_1.SanitizeTypes.NESTED,
            object: object,
            propertyName: propertyName,
            each: annotationOptions && annotationOptions.each ? annotationOptions.each : undefined
        });
    };
}
exports.SanitizeNested = SanitizeNested;
//# sourceMappingURL=decorators.js.map