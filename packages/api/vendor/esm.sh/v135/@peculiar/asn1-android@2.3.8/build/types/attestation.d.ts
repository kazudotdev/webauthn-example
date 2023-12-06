import { OctetString } from "https://esm.sh/v135/@peculiar/asn1-schema@2.3.8/build/types/index.d.ts";
/**
 * Implements ASN.1 structure for attestation package info.
 *
 * ```asn
 * AttestationPackageInfo ::= SEQUENCE {
 *   package_name  OCTET_STRING,
 *   version       INTEGER,
 * }
 * ```
 */
export declare class AttestationPackageInfo {
    packageName: OctetString;
    version: number;
    constructor(params?: Partial<AttestationPackageInfo>);
}
/**
 * Implements ASN.1 structure for attestation application id.
 *
 * ```asn
 * AttestationApplicationId ::= SEQUENCE {
 *   package_infos      SET OF AttestationPackageInfo,
 *   signature_digests  SET OF OCTET_STRING,
 * }
 * ```
 */
export declare class AttestationApplicationId {
    packageInfos: AttestationPackageInfo[];
    signatureDigests: OctetString[];
    constructor(params?: Partial<AttestationApplicationId>);
}
