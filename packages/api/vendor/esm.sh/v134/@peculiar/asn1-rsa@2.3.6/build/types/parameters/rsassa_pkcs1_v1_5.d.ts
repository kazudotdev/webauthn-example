import { AlgorithmIdentifier } from "https://esm.sh/v134/@peculiar/asn1-x509@2.3.8/build/types/index.d.ts";
import { OctetString } from "https://esm.sh/v134/@peculiar/asn1-schema@2.3.8/build/types/index.d.ts";
/**
 * ```
 * DigestInfo ::= SEQUENCE {
 *   digestAlgorithm DigestAlgorithm,
 *   digest OCTET STRING
 * }
 * ```
 */
export declare class DigestInfo {
    digestAlgorithm: AlgorithmIdentifier;
    digest: OctetString;
    constructor(params?: Partial<DigestInfo>);
}
