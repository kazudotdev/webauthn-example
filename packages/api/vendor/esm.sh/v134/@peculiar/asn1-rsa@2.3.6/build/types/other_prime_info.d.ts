import { AsnArray } from "https://esm.sh/v134/@peculiar/asn1-schema@2.3.8/build/types/index.d.ts";
/**
 * ```
 * OtherPrimeInfo ::= SEQUENCE {
 *     prime             INTEGER,  -- ri
 *     exponent          INTEGER,  -- di
 *     coefficient       INTEGER   -- ti
 * }
 * ```
 */
export declare class OtherPrimeInfo {
    prime: ArrayBuffer;
    exponent: ArrayBuffer;
    coefficient: ArrayBuffer;
    constructor(params?: Partial<OtherPrimeInfo>);
}
/**
 * ```
 * OtherPrimeInfos ::= SEQUENCE SIZE(1..MAX) OF OtherPrimeInfo
 * ```
 */
export declare class OtherPrimeInfos extends AsnArray<OtherPrimeInfo> {
    constructor(items?: OtherPrimeInfo[]);
}
