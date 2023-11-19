import * as asn1js from "https://esm.sh/v134/asn1js@3.0.5/build/index.d.ts";
/**
 * Serializes objects into ASN.1 encoded data
 */
export declare class AsnSerializer {
    /**
     * Serializes an object to the ASN.1 encoded buffer
     * @param obj The object to serialize
     */
    static serialize(obj: unknown): ArrayBuffer;
    /**
     * Serialize an object to the asn1js object
     * @param obj The object to serialize
     */
    static toASN(obj: unknown): asn1js.AsnType;
    private static toAsnItem;
}
