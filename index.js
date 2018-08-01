"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Sanitizer_1 = require("./Sanitizer");
__export(require("./decorators"));
__export(require("./Sanitizer"));
var sanitizer = new Sanitizer_1.Sanitizer();
exports.default = sanitizer;
function sanitize(object) {
    return sanitizer.sanitize(object);
}
exports.sanitize = sanitize;
function sanitizeAsync(object) {
    return sanitizer.sanitizeAsync(object);
}
exports.sanitizeAsync = sanitizeAsync;
//# sourceMappingURL=index.js.map