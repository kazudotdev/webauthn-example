import { GeneralNames } from "../general_names.d.ts";
import { GeneralName } from '../general_name.d.ts';
/**
 * ```
 * id-ce-subjectAltName OBJECT IDENTIFIER ::=  { id-ce 17 }
 * ```
 */
export declare const id_ce_subjectAltName = "2.5.29.17";
/**
 * ```
 * SubjectAltName ::= GeneralNames
 * ```
 */
export declare class SubjectAlternativeName extends GeneralNames {
    constructor(items?: GeneralName[]);
}
