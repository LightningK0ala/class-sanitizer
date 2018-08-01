"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Storage all metadatas of this library.
 */
var MetadataStorage = (function () {
    function MetadataStorage() {
        // -------------------------------------------------------------------------
        // Properties
        // -------------------------------------------------------------------------
        this._sanitationMetadata = [];
        this._constraintMetadatas = [];
    }
    Object.defineProperty(MetadataStorage.prototype, "sanitationMetadata", {
        // -------------------------------------------------------------------------
        // Getter Methods
        // -------------------------------------------------------------------------
        /**
         * Gets all sanitation metadatas saved in this storage.
         */
        get: function () {
            return this._sanitationMetadata;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MetadataStorage.prototype, "constraintMetadatas", {
        /**
         * Gets all constraint metadatas saved in this storage.
         */
        get: function () {
            return this._constraintMetadatas;
        },
        enumerable: true,
        configurable: true
    });
    // -------------------------------------------------------------------------
    // Adder Methods
    // -------------------------------------------------------------------------
    /**
     * Adds a new sanitation metadata.
     */
    MetadataStorage.prototype.addSanitationMetadata = function (metadata) {
        this.sanitationMetadata.push(metadata);
    };
    /**
     * Adds a new constraint metadata.
     */
    MetadataStorage.prototype.addConstraintMetadata = function (metadata) {
        this.constraintMetadatas.push(metadata);
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    /**
     * Gets all sanitation metadatas for the given targetConstructor with the given groups.
     */
    MetadataStorage.prototype.getSanitizeMetadatasForObject = function (targetConstructor) {
        return this.sanitationMetadata.filter(function (metadata) {
            if (typeof metadata.object.constructor === 'function') {
              return (
                metadata.object.constructor === targetConstructor ||
                targetConstructor.prototype instanceof metadata.object.constructor
              );
            }
        });
    };
    /**
     * Gets all sanitizator constraints for the given object.
     */
    MetadataStorage.prototype.getSanitizeConstraintsForObject = function (object) {
        return this.constraintMetadatas.filter(function (metadata) { return metadata.object === object; });
    };
    return MetadataStorage;
}());
exports.MetadataStorage = MetadataStorage;
/**
 * Default metadata storage used as singleton and can be used to storage all metadatas in the system.
 */
exports.defaultMetadataStorage = new MetadataStorage();
//# sourceMappingURL=MetadataStorage.js.map
