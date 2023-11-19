import { AlgorithmIdentifier } from "./algorithm_identifier.d.ts";
import { TBSCertificate } from "./tbs_certificate.d.ts";
/**
 * ```
 * Certificate  ::=  SEQUENCE  {
 *   tbsCertificate       TBSCertificate,
 *   signatureAlgorithm   AlgorithmIdentifier,
 *   signatureValue       BIT STRING  }
 * ```
 */
export declare class Certificate {
    tbsCertificate: TBSCertificate;
    signatureAlgorithm: AlgorithmIdentifier;
    signatureValue: ArrayBuffer;
    constructor(params?: Partial<Certificate>);
}
