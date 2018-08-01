"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SanitizeTypes_1 = require("./SanitizeTypes");
var MetadataStorage_1 = require("./metadata/MetadataStorage");
var validatatorJs = require("validator");
/**
 * Sanitizer performs sanitation of the given object based on its metadata.
 */
var Sanitizer = (function () {
    function Sanitizer() {
        // -------------------------------------------------------------------------
        // Properties
        // -------------------------------------------------------------------------
        this.metadataStorage = MetadataStorage_1.defaultMetadataStorage;
    }
    Object.defineProperty(Sanitizer.prototype, "container", {
        // -------------------------------------------------------------------------
        // Accessors
        // -------------------------------------------------------------------------
        set: function (container) {
            this._container = container;
        },
        enumerable: true,
        configurable: true
    });
    // -------------------------------------------------------------------------
    // Annotation-based Validation Methods
    // -------------------------------------------------------------------------
    /**
     * Performs sanitation of the given object based on annotations used in given object class.
     */
    Sanitizer.prototype.sanitize = function (object) {
        var _this = this;
        this.metadataStorage
            .getSanitizeMetadatasForObject(object.constructor)
            .filter(function (metadata) { return !!object[metadata.propertyName]; })
            .forEach(function (metadata) { return object[metadata.propertyName] = _this.sanitizeValue(object[metadata.propertyName], metadata); });
        // todo: implemented nested sanitation
    };
    /**
     * Performs sanitation of the given object based on annotations used in given object class.
     * Performs in async-style, useful to use it in chained promises.
     */
    Sanitizer.prototype.sanitizeAsync = function (object) {
        var _this = this;
        return new Promise(function (ok) {
            _this.sanitize(object);
            ok(object);
        });
    };
    Sanitizer.prototype.blacklist = function (str, chars) {
        return validatatorJs.blacklist(str, chars);
    };
    /**
     * Replace <, >, &, ', " and / with HTML entities.
     */
    Sanitizer.prototype.escape = function (str) {
        return validatatorJs.escape(str);
    };
    /**
     * Trim characters from the left-side of the input.
     */
    Sanitizer.prototype.ltrim = function (str, chars) {
        return validatatorJs.ltrim(str, chars ? chars.join() : undefined);
    };
    /**
     * Canonicalize an email address.
     */
    Sanitizer.prototype.normalizeEmail = function (str, lowercase) {
        return validatatorJs.normalizeEmail(str, lowercase);
    };
    /**
     * Trim characters from the right-side of the input.
     */
    Sanitizer.prototype.rtrim = function (str, chars) {
        return validatatorJs.rtrim(str, chars ? chars.join() : undefined);
    };
    /**
     * Remove characters with a numerical value < 32 and 127, mostly control characters.
     * If keepNewLines is true, newline characters are preserved (\n and \r, hex 0xA and 0xD).
     * Unicode-safe in JavaScript.
     */
    Sanitizer.prototype.stripLow = function (str, keepNewLines) {
        return validatatorJs.stripLow(str, keepNewLines);
    };
    /**
     * Convert the input to a boolean.
     * Everything except for '0', 'false' and '' returns true. In strict mode only '1' and 'true' return true.
     */
    Sanitizer.prototype.toBoolean = function (input, isStrict) {
        if (typeof input === "string") {
            return validatatorJs.toBoolean(input, isStrict);
        }
        return !!input;
    };
    /**
     * Convert the input to a date, or null if the input is not a date.
     */
    Sanitizer.prototype.toDate = function (input) {
        if (input instanceof Date) {
            return input;
        }
        return validatatorJs.toDate(input);
    };
    /**
     * Convert the input to a float.
     */
    Sanitizer.prototype.toFloat = function (input) {
        if (typeof input === "number") {
            return input;
        }
        return validatatorJs.toFloat(input);
    };
    /**
     * Convert the input to an integer, or NaN if the input is not an integer.
     */
    Sanitizer.prototype.toInt = function (input, radix) {
        if (typeof input === "number") {
            return input | 0;
        }
        return validatatorJs.toInt(input, radix);
    };
    /**
     * Convert the input to a string.
     */
    Sanitizer.prototype.toString = function (input) {
        return validatatorJs.toString(input);
    };
    /**
     * Trim characters (whitespace by default) from both sides of the input. You can specify chars that should be trimmed.
     */
    Sanitizer.prototype.trim = function (str, chars) {
        return validatatorJs.trim(str, chars ? chars.join() : undefined);
    };
    Sanitizer.prototype.whitelist = function (str, chars) {
        return validatatorJs.whitelist(str, chars);
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    Sanitizer.prototype.sanitizeValue = function (value, metadata) {
        var _this = this;
        switch (metadata.type) {
            case SanitizeTypes_1.SanitizeTypes.BLACKLIST:
                return this.blacklist(value, metadata.value1);
            case SanitizeTypes_1.SanitizeTypes.ESCAPE:
                return this.escape(value);
            case SanitizeTypes_1.SanitizeTypes.LTRIM:
                return this.ltrim(value, metadata.value1);
            case SanitizeTypes_1.SanitizeTypes.NORMALIZE_EMAIL:
                return this.normalizeEmail(value, metadata.value1);
            case SanitizeTypes_1.SanitizeTypes.RTRIM:
                return this.rtrim(value, metadata.value1);
            case SanitizeTypes_1.SanitizeTypes.STRIP_LOW:
                return this.stripLow(value, metadata.value1);
            case SanitizeTypes_1.SanitizeTypes.TO_BOOLEAN:
                return this.toBoolean(value, metadata.value1);
            case SanitizeTypes_1.SanitizeTypes.TO_DATE:
                return this.toDate(value);
            case SanitizeTypes_1.SanitizeTypes.TO_FLOAT:
                return this.toFloat(value);
            case SanitizeTypes_1.SanitizeTypes.TO_INT:
                return this.toInt(value, metadata.value1);
            case SanitizeTypes_1.SanitizeTypes.TO_STRING:
                return this.toString(value);
            case SanitizeTypes_1.SanitizeTypes.TRIM:
                return this.trim(value, metadata.value1);
            case SanitizeTypes_1.SanitizeTypes.WHITELIST:
                return this.whitelist(value, metadata.value1);
            case SanitizeTypes_1.SanitizeTypes.CUSTOM_SANITIZATION:
                return this.metadataStorage
                    .getSanitizeConstraintsForObject(metadata.value1)
                    .map(function (sanitizerMetadata) {
                    if (!sanitizerMetadata.instance)
                        sanitizerMetadata.instance = _this.createInstance(sanitizerMetadata.object);
                    return sanitizerMetadata.instance;
                }).reduce(function (result, sanitizer) { return sanitizer.sanitize(result); }, value);
            default:
                throw Error("Wrong sanitation type is supplied " + metadata.type + " for value " + value);
        }
    };
    Sanitizer.prototype.createInstance = function (object) {
        return this._container ? this._container.get(object) : new object();
    };
    return Sanitizer;
}());
exports.Sanitizer = Sanitizer;
//# sourceMappingURL=Sanitizer.js.map