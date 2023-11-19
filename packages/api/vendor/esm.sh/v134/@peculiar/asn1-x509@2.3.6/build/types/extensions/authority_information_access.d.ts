import { AsnArray } from "https://esm.sh/v134/@peculiar/asn1-schema@2.3.8/build/types/index.d.ts";
import { GeneralName } from "../general_name.d.ts";
/***
 * ```
 * id-pe-authorityInfoAccess OBJECT IDENTIFIER ::= { id-pe 1 }
 * ```
 */
export declare const id_pe_authorityInfoAccess: string;
/**
 * ```
 * AccessDescription  ::=  SEQUENCE {
 *   accessMethod          OBJECT IDENTIFIER,
 *   accessLocation        GeneralName  }
 * ```
 */
export declare class AccessDescription {
    accessMethod: string;
    accessLocation: GeneralName;
    constructor(params?: Partial<AccessDescription>);
}
/**
 * ```
 * AuthorityInfoAccessSyntax  ::=
 *   SEQUENCE SIZE (1..MAX) OF AccessDescription
 * ```
 */
export declare class AuthorityInfoAccessSyntax extends AsnArray<AccessDescription> {
    constructor(items?: AccessDescription[]);
}
