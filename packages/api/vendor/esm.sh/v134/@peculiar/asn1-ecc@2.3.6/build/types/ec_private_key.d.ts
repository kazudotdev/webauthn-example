import { OctetString } from "https://esm.sh/v134/@peculiar/asn1-schema@2.3.8/build/types/index.d.ts";
import { ECParameters } from "./ec_parameters.d.ts";
/**
 * ```
 * ECPrivateKey ::= SEQUENCE {
 *   version        INTEGER { ecPrivkeyVer1(1) } (ecPrivkeyVer1),
 *   privateKey     OCTET STRING,
 *   parameters [0] ECParameters {{ NamedCurve }} OPTIONAL,
 *   publicKey  [1] BIT STRING OPTIONAL
 * }
 * ```
 */
export declare class ECPrivateKey {
    version: number;
    privateKey: OctetString;
    parameters?: ECParameters;
    publicKey?: ArrayBuffer;
    constructor(params?: Partial<ECPrivateKey>);
}
