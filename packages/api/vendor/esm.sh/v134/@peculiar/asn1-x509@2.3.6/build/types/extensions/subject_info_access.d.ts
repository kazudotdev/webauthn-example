import { AsnArray } from "https://esm.sh/v134/@peculiar/asn1-schema@2.3.8/build/types/index.d.ts";
import { AccessDescription } from "./authority_information_access.d.ts";
/**
 * ```
 * id-pe-subjectInfoAccess OBJECT IDENTIFIER ::= { id-pe 11 }
 * ```
 */
export declare const id_pe_subjectInfoAccess: string;
/**
 * ```
 * SubjectInfoAccessSyntax  ::=
 *         SEQUENCE SIZE (1..MAX) OF AccessDescription
 * ```
 */
export declare class SubjectInfoAccessSyntax extends AsnArray<AccessDescription> {
    constructor(items?: AccessDescription[]);
}
