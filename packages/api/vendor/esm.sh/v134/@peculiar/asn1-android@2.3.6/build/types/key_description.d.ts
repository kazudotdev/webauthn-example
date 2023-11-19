import { AsnArray, OctetString } from "https://esm.sh/v134/@peculiar/asn1-schema@2.3.8/build/types/index.d.ts";
export declare const id_ce_keyDescription = "1.3.6.1.4.1.11129.2.1.17";
/**
 * ```
 * VerifiedBootState ::= ENUMERATED {
 *   Verified                   (0),
 *   SelfSigned                 (1),
 *   Unverified                 (2),
 *   Failed                     (3),
 * }
 * ```
 */
export declare enum VerifiedBootState {
    verified = 0,
    selfSigned = 1,
    unverified = 2,
    failed = 3
}
/**
 * ```
 * RootOfTrust ::= SEQUENCE {
 *   verifiedBootKey            OCTET_STRING,
 *   deviceLocked               BOOLEAN,
 *   verifiedBootState          VerifiedBootState,
 *   verifiedBootHash           OCTET_STRING, # KM4
 * }
 * ```
 */
export declare class RootOfTrust {
    verifiedBootKey: OctetString;
    deviceLocked: boolean;
    verifiedBootState: VerifiedBootState;
    /**
     * `verifiedBootHash` must present in `KeyDescription` version 3
     */
    verifiedBootHash?: OctetString;
    constructor(params?: Partial<RootOfTrust>);
}
export declare class IntegerSet extends AsnArray<number> {
    constructor(items?: number[]);
}
/**
 * ```
 * AuthorizationList ::= SEQUENCE {
 *   purpose                     [1] EXPLICIT SET OF INTEGER OPTIONAL,
 *   algorithm                   [2] EXPLICIT INTEGER OPTIONAL,
 *   keySize                     [3] EXPLICIT INTEGER OPTIONAL.
 *   digest                      [5] EXPLICIT SET OF INTEGER OPTIONAL,
 *   padding                     [6] EXPLICIT SET OF INTEGER OPTIONAL,
 *   ecCurve                     [10] EXPLICIT INTEGER OPTIONAL,
 *   rsaPublicExponent           [200] EXPLICIT INTEGER OPTIONAL,
 *   rollbackResistance          [303] EXPLICIT NULL OPTIONAL, # KM4
 *   activeDateTime              [400] EXPLICIT INTEGER OPTIONAL
 *   originationExpireDateTime   [401] EXPLICIT INTEGER OPTIONAL
 *   usageExpireDateTime         [402] EXPLICIT INTEGER OPTIONAL
 *   noAuthRequired              [503] EXPLICIT NULL OPTIONAL,
 *   userAuthType                [504] EXPLICIT INTEGER OPTIONAL,
 *   authTimeout                 [505] EXPLICIT INTEGER OPTIONAL,
 *   allowWhileOnBody            [506] EXPLICIT NULL OPTIONAL,
 *   trustedUserPresenceRequired [507] EXPLICIT NULL OPTIONAL, # KM4
 *   trustedConfirmationRequired [508] EXPLICIT NULL OPTIONAL, # KM4
 *   unlockedDeviceRequired      [509] EXPLICIT NULL OPTIONAL, # KM4
 *   allApplications             [600] EXPLICIT NULL OPTIONAL,
 *   applicationId               [601] EXPLICIT OCTET_STRING OPTIONAL,
 *   creationDateTime            [701] EXPLICIT INTEGER OPTIONAL,
 *   origin                      [702] EXPLICIT INTEGER OPTIONAL,
 *   rollbackResistant           [703] EXPLICIT NULL OPTIONAL, # KM2 and KM3 only.
 *   rootOfTrust                 [704] EXPLICIT RootOfTrust OPTIONAL,
 *   osVersion                   [705] EXPLICIT INTEGER OPTIONAL,
 *   osPatchLevel                [706] EXPLICIT INTEGER OPTIONAL,
 *   attestationApplicationId    [709] EXPLICIT OCTET_STRING OPTIONAL, # KM3
 *   attestationIdBrand          [710] EXPLICIT OCTET_STRING OPTIONAL, # KM3
 *   attestationIdDevice         [711] EXPLICIT OCTET_STRING OPTIONAL, # KM3
 *   attestationIdProduct        [712] EXPLICIT OCTET_STRING OPTIONAL, # KM3
 *   attestationIdSerial         [713] EXPLICIT OCTET_STRING OPTIONAL, # KM3
 *   attestationIdImei           [714] EXPLICIT OCTET_STRING OPTIONAL, # KM3
 *   attestationIdMeid           [715] EXPLICIT OCTET_STRING OPTIONAL, # KM3
 *   attestationIdManufacturer   [716] EXPLICIT OCTET_STRING OPTIONAL, # KM3
 *   attestationIdModel          [717] EXPLICIT OCTET_STRING OPTIONAL, # KM3
 *   vendorPatchLevel            [718] EXPLICIT INTEGER OPTIONAL, # KM4
 *   bootPatchLevel              [719] EXPLICIT INTEGER OPTIONAL, # KM4
 * }
 * ```
 */
export declare class AuthorizationList {
    purpose?: IntegerSet;
    algorithm?: number;
    keySize?: number;
    digest?: IntegerSet;
    padding?: IntegerSet;
    ecCurve?: number;
    rsaPublicExponent?: number;
    rollbackResistance?: null;
    activeDateTime?: number;
    originationExpireDateTime?: number;
    usageExpireDateTime?: number;
    noAuthRequired?: null;
    userAuthType?: number;
    authTimeout?: number;
    allowWhileOnBody?: null;
    trustedUserPresenceRequired?: null;
    trustedConfirmationRequired?: null;
    unlockedDeviceRequired?: null;
    allApplications?: null;
    applicationId?: OctetString;
    creationDateTime?: number;
    origin?: number;
    rollbackResistant?: null;
    rootOfTrust?: RootOfTrust;
    osVersion?: number;
    osPatchLevel?: number;
    attestationApplicationId?: OctetString;
    attestationIdBrand?: OctetString;
    attestationIdDevice?: OctetString;
    attestationIdProduct?: OctetString;
    attestationIdSerial?: OctetString;
    attestationIdImei?: OctetString;
    attestationIdMeid?: OctetString;
    attestationIdManufacturer?: OctetString;
    attestationIdModel?: OctetString;
    vendorPatchLevel?: number;
    bootPatchLevel?: number;
    constructor(params?: Partial<AuthorizationList>);
}
/**
 * ```
 * SecurityLevel ::= ENUMERATED {
 *   Software                   (0),
 *   TrustedEnvironment         (1),
 *   StrongBox                  (2),
 * }
 * ```
 */
export declare enum SecurityLevel {
    software = 0,
    trustedEnvironment = 1,
    strongBox = 2
}
export declare enum Version {
    KM2 = 1,
    KM3 = 2,
    KM4 = 3
}
/**
 * ```
 * KeyDescription ::= SEQUENCE {
 *   attestationVersion         INTEGER, # KM2 value is 1. KM3 value is 2. KM4 value is 3.
 *   attestationSecurityLevel   SecurityLevel,
 *   keymasterVersion           INTEGER,
 *   keymasterSecurityLevel     SecurityLevel,
 *   attestationChallenge       OCTET_STRING,
 *   uniqueId                   OCTET_STRING,
 *   softwareEnforced           AuthorizationList,
 *   teeEnforced                AuthorizationList,
 * }
 * ```
 */
export declare class KeyDescription {
    attestationVersion: Version;
    attestationSecurityLevel: SecurityLevel;
    keymasterVersion: number;
    keymasterSecurityLevel: SecurityLevel;
    attestationChallenge: OctetString;
    uniqueId: OctetString;
    softwareEnforced: AuthorizationList;
    teeEnforced: AuthorizationList;
    constructor(params?: Partial<KeyDescription>);
}
