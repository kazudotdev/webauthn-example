import { AlgorithmIdentifier } from "./algorithm_identifier.d.ts";
import { Name } from "./name.d.ts";
import { SubjectPublicKeyInfo } from "./subject_public_key_info.d.ts";
import { Validity } from "./validity.d.ts";
import { Extensions } from "./extension.d.ts";
import { Version, CertificateSerialNumber, UniqueIdentifier } from "./types.d.ts";
/**
 * ```
 * TBSCertificate  ::=  SEQUENCE  {
 *   version         [0]  Version DEFAULT v1,
 *   serialNumber         CertificateSerialNumber,
 *   signature            AlgorithmIdentifier,
 *   issuer               Name,
 *   validity             Validity,
 *   subject              Name,
 *   subjectPublicKeyInfo SubjectPublicKeyInfo,
 *   issuerUniqueID  [1]  IMPLICIT UniqueIdentifier OPTIONAL,
 *                        -- If present, version MUST be v2 or v3
 *   subjectUniqueID [2]  IMPLICIT UniqueIdentifier OPTIONAL,
 *                        -- If present, version MUST be v2 or v3
 *   extensions      [3]  Extensions OPTIONAL
 *                        -- If present, version MUST be v3 --  }
 * ```
 */
export declare class TBSCertificate {
    version: Version;
    serialNumber: CertificateSerialNumber;
    signature: AlgorithmIdentifier;
    issuer: Name;
    validity: Validity;
    subject: Name;
    subjectPublicKeyInfo: SubjectPublicKeyInfo;
    issuerUniqueID?: UniqueIdentifier;
    subjectUniqueID?: UniqueIdentifier;
    extensions?: Extensions;
    constructor(params?: Partial<TBSCertificate>);
}
