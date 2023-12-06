import { AsnArray } from "https://esm.sh/v135/@peculiar/asn1-schema@2.3.8/build/types/index.d.ts";
import { CertPolicyId } from "./certificate_policies.d.ts";
/**
 * ```
 * id-ce-policyMappings OBJECT IDENTIFIER ::=  { id-ce 33 }
 * ```
 */
export declare const id_ce_policyMappings = "2.5.29.33";
/**
 * ```
 * PolicyMapping ::= SEQUENCE {
 *   issuerDomainPolicy      CertPolicyId,
 *   subjectDomainPolicy     CertPolicyId }
 * ```
 */
export declare class PolicyMapping {
    issuerDomainPolicy: CertPolicyId;
    subjectDomainPolicy: CertPolicyId;
    constructor(params?: Partial<PolicyMappings>);
}
/**
 * ```
 * PolicyMappings ::= SEQUENCE SIZE (1..MAX) OF PolicyMapping
 * ```
 */
export declare class PolicyMappings extends AsnArray<PolicyMapping> {
    constructor(items?: PolicyMapping[]);
}
