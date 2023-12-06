import { GeneralNames } from "../general_names.d.ts";
import { GeneralName } from '../general_name.d.ts';
/**
 * ```
 * id-ce-issuerAltName OBJECT IDENTIFIER ::=  { id-ce 18 }
 * ```
 */
export declare const id_ce_issuerAltName = "2.5.29.18";
/**
 * ```
 * IssuerAltName ::= GeneralNames
 * ```
 */
export declare class IssueAlternativeName extends GeneralNames {
    constructor(items?: GeneralName[]);
}
