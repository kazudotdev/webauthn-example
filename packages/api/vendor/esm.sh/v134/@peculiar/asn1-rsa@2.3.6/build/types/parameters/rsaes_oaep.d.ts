import { AlgorithmIdentifier } from "https://esm.sh/v134/@peculiar/asn1-x509@2.3.8/build/types/index.d.ts";
/**
 * ```
 * RSAES-OAEP-params ::= SEQUENCE {
 *   hashAlgorithm      [0] HashAlgorithm     DEFAULT sha1,
 *   maskGenAlgorithm   [1] MaskGenAlgorithm  DEFAULT mgf1SHA1,
 *   pSourceAlgorithm   [2] PSourceAlgorithm  DEFAULT pSpecifiedEmpty
 * }
 * ```
 */
export declare class RsaEsOaepParams {
    hashAlgorithm: AlgorithmIdentifier;
    maskGenAlgorithm: AlgorithmIdentifier;
    pSourceAlgorithm: AlgorithmIdentifier;
    constructor(params?: Partial<RsaEsOaepParams>);
}
/**
 * ```
 * { OID id-RSAES-OAEP   PARAMETERS RSAES-OAEP-params } |
 * ```
 */
export declare const RSAES_OAEP: AlgorithmIdentifier;
