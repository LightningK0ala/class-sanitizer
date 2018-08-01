import { SanitationMetadata } from "./SanitationMetadata";
import { ConstraintMetadata } from "./ConstraintMetadata";
/**
 * Storage all metadatas of this library.
 */
export declare class MetadataStorage {
    private _sanitationMetadata;
    private _constraintMetadatas;
    /**
     * Gets all sanitation metadatas saved in this storage.
     */
    readonly sanitationMetadata: SanitationMetadata[];
    /**
     * Gets all constraint metadatas saved in this storage.
     */
    readonly constraintMetadatas: ConstraintMetadata[];
    /**
     * Adds a new sanitation metadata.
     */
    addSanitationMetadata(metadata: SanitationMetadata): void;
    /**
     * Adds a new constraint metadata.
     */
    addConstraintMetadata(metadata: ConstraintMetadata): void;
    /**
     * Gets all sanitation metadatas for the given targetConstructor with the given groups.
     */
    getSanitizeMetadatasForObject(targetConstructor: Function): SanitationMetadata[];
    /**
     * Gets all sanitizator constraints for the given object.
     */
    getSanitizeConstraintsForObject(object: Function): ConstraintMetadata[];
}
/**
 * Default metadata storage used as singleton and can be used to storage all metadatas in the system.
 */
export declare let defaultMetadataStorage: MetadataStorage;
