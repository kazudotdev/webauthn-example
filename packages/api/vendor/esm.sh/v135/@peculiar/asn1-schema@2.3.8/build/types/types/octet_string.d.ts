import * as asn1js from "https://esm.sh/v135/asn1js@3.0.5/build/index.d.ts";
import { BufferSource } from "https://esm.sh/v135/pvtsutils@1.3.5/build/index.d.ts";
import { IAsnConvertible } from "../types.d.ts";
export declare class OctetString implements IAsnConvertible, ArrayBufferView {
    buffer: ArrayBuffer;
    get byteLength(): number;
    get byteOffset(): number;
    constructor();
    constructor(byteLength: number);
    constructor(bytes: number[]);
    constructor(bytes: BufferSource);
    fromASN(asn: asn1js.OctetString): this;
    toASN(): asn1js.OctetString;
    toSchema(name: string): asn1js.OctetString;
}
