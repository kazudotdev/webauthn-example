import * as asn1js from "https://esm.sh/v134/asn1js@3.0.5/build/index.d.ts";
import { BufferSource } from "https://esm.sh/v134/pvtsutils@1.3.5/build/index.d.ts";
import { IAsnConvertible } from "../types.d.ts";
export declare class BitString<T extends number = number> implements IAsnConvertible {
    unusedBits: number;
    value: ArrayBuffer;
    constructor();
    constructor(value: T);
    constructor(value: BufferSource, unusedBits?: number);
    fromASN(asn: asn1js.BitString): this;
    toASN(): asn1js.BitString;
    toSchema(name: string): asn1js.BitString;
    toNumber(): T;
    fromNumber(value: T): void;
}
