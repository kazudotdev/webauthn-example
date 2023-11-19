import { AsnArray } from "https://esm.sh/v134/@peculiar/asn1-schema@2.3.8/build/types/index.d.ts";
import { Attribute } from "../attribute.d.ts";
/**
 * ```
 * id-ce-subjectDirectoryAttributes OBJECT IDENTIFIER ::=  { id-ce 9 }
 * ```
 */
export declare const id_ce_subjectDirectoryAttributes = "2.5.29.9";
/**
 * ```
 * SubjectDirectoryAttributes ::= SEQUENCE SIZE (1..MAX) OF Attribute
 * ```
 */
export declare class SubjectDirectoryAttributes extends AsnArray<Attribute> {
    constructor(items?: Attribute[]);
}
