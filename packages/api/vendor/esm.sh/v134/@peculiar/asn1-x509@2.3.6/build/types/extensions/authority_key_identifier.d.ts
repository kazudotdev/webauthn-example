import { OctetString } from "https://esm.sh/v134/@peculiar/asn1-schema@2.3.8/build/types/index.d.ts";
import { GeneralName } from "../general_name.d.ts";
import { CertificateSerialNumber } from "../types.d.ts";
/**
 * ```
 * id-ce-authorityKeyIdentifier OBJECT IDENTIFIER ::=  { id-ce 35 }
 * ```
 */
export declare const id_ce_authorityKeyIdentifier: string;
/**
 * ```
 * KeyIdentifier ::= OCTET STRING
 * ```
 */
export declare class KeyIdentifier extends OctetString {
}
/**
 * ```
 * AuthorityKeyIdentifier ::= SEQUENCE {
 *   keyIdentifier             [0] KeyIdentifier           OPTIONAL,
 *   authorityCertIssuer       [1] GeneralNames            OPTIONAL,
 *   authorityCertSerialNumber [2] CertificateSerialNumber OPTIONAL  }
 * ```
 */
export declare class AuthorityKeyIdentifier {
    keyIdentifier?: KeyIdentifier;
    authorityCertIssuer?: GeneralName[];
    authorityCertSerialNumber?: CertificateSerialNumber;
    constructor(params?: Partial<AuthorityKeyIdentifier>);
}
