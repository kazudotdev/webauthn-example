import { AsnArray } from "https://esm.sh/v134/@peculiar/asn1-schema@2.3.8/build/types/index.d.ts";
import { GeneralName } from "../general_name.d.ts";
/**
 * ```
 * id-ce-nameConstraints OBJECT IDENTIFIER ::=  { id-ce 30 }
 * ```
 */
export declare const id_ce_nameConstraints = "2.5.29.30";
/**
 * ```
 * BaseDistance ::= INTEGER (0..MAX)
 * ```
 */
export type BaseDistance = number;
/**
 * ```
 * GeneralSubtree ::= SEQUENCE {
 *   base                    GeneralName,
 *   minimum         [0]     BaseDistance DEFAULT 0,
 *   maximum         [1]     BaseDistance OPTIONAL }
 * ```
 */
export declare class GeneralSubtree {
    base: GeneralName;
    minimum: BaseDistance;
    maximum?: BaseDistance;
    constructor(params?: Partial<GeneralSubtree>);
}
/**
 * ```
 * GeneralSubtrees ::= SEQUENCE SIZE (1..MAX) OF GeneralSubtree
 * ```
 */
export declare class GeneralSubtrees extends AsnArray<GeneralSubtree> {
    constructor(items?: GeneralSubtree[]);
}
/**
 * ```
 * NameConstraints ::= SEQUENCE {
 *   permittedSubtrees       [0]     GeneralSubtrees OPTIONAL,
 *   excludedSubtrees        [1]     GeneralSubtrees OPTIONAL }
 * ```
 */
export declare class NameConstraints {
    permittedSubtrees?: GeneralSubtrees;
    excludedSubtrees?: GeneralSubtrees;
    constructor(params?: Partial<NameConstraints>);
}
