import { GeneralName } from "./general_name.d.ts";
import { AsnArray } from "https://esm.sh/v135/@peculiar/asn1-schema@2.3.8/build/types/index.d.ts";
/**
 * ```
 * GeneralNames ::= SEQUENCE SIZE (1..MAX) OF GeneralName
 * ```
 */
export declare class GeneralNames extends AsnArray<GeneralName> {
    constructor(items?: GeneralName[]);
}
