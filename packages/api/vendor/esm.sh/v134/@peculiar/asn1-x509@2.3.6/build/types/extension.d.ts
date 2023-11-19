import { AsnArray, OctetString } from "https://esm.sh/v134/@peculiar/asn1-schema@2.3.8/build/types/index.d.ts";
/**
 * ```
 * Extension  ::=  SEQUENCE  {
 *   extnID      OBJECT IDENTIFIER,
 *   critical    BOOLEAN DEFAULT FALSE,
 *   extnValue   OCTET STRING
 *               -- contains the DER encoding of an ASN.1 value
 *               -- corresponding to the extension type identified
 *               -- by extnID
 *   }
 * ```
 */
export declare class Extension {
    static CRITICAL: boolean;
    extnID: string;
    critical: boolean;
    extnValue: OctetString;
    constructor(params?: Partial<Extension>);
}
/**
 * ```
 * Extensions  ::=  SEQUENCE SIZE (1..MAX) OF Extension
 * ```
 */
export declare class Extensions extends AsnArray<Extension> {
    constructor(items?: Extension[]);
}