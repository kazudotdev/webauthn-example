import { AlgorithmIdentifier } from "./algorithm_identifier.d.ts";
import { TBSCertList } from "./tbs_cert_list.d.ts";
/**
 * ```
 * CertificateList  ::=  SEQUENCE  {
 *   tbsCertList          TBSCertList,
 *   signatureAlgorithm   AlgorithmIdentifier,
 *   signature            BIT STRING  }
 * ```
 */
export declare class CertificateList {
    tbsCertList: TBSCertList;
    signatureAlgorithm: AlgorithmIdentifier;
    signature: ArrayBuffer;
    constructor(params?: Partial<CertificateList>);
}
