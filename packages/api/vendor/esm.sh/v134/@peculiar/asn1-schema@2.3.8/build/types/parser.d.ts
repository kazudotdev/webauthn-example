import * as asn1js from "https://esm.sh/v134/asn1js@3.0.5/build/index.d.ts";
import type { BufferSource } from "https://esm.sh/v134/pvtsutils@1.3.5/build/index.d.ts";
import { IEmptyConstructor } from "./types.d.ts";
/**
 * Deserializes objects from ASN.1 encoded data
 */
export declare class AsnParser {
    /**
     * Deserializes an object from the ASN.1 encoded buffer
     * @param data ASN.1 encoded buffer
     * @param target Target schema for object deserialization
     */
    static parse<T>(data: BufferSource, target: IEmptyConstructor<T>): T;
    /**
     * Deserializes an object from the asn1js object
     * @param asn1Schema asn1js object
     * @param target Target schema for object deserialization
     */
    static fromASN<T>(asn1Schema: asn1js.AsnType, target: IEmptyConstructor<T>): T;
}
