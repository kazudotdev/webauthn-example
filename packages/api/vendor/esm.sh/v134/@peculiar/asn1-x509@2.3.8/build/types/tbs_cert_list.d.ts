import { AlgorithmIdentifier } from "./algorithm_identifier.d.ts";
import { Name } from "./name.d.ts";
import { Time } from "./time.d.ts";
import { Extension } from "./extension.d.ts";
import { Version } from "./types.d.ts";
/**
 * Revoked certificate
 * ```
 * SEQUENCE  {
 *   userCertificate         CertificateSerialNumber,
 *   revocationDate          Time,
 *   crlEntryExtensions      Extensions OPTIONAL
 *                            -- if present, version MUST be v2
 * }
 * ```
 */
export declare class RevokedCertificate {
    /**
     * Serial number of the certificate
     */
    userCertificate: ArrayBuffer;
    /**
     * Revocation date
     */
    revocationDate: Time;
    crlEntryExtensions?: Extension[];
    constructor(params?: Partial<RevokedCertificate>);
}
/**
 * ```
 * TBSCertList  ::=  SEQUENCE  {
 *   version                 Version OPTIONAL,
 *                                 -- if present, MUST be v2
 *   signature               AlgorithmIdentifier,
 *   issuer                  Name,
 *   thisUpdate              Time,
 *   nextUpdate              Time OPTIONAL,
 *   revokedCertificates     SEQUENCE OF SEQUENCE  {
 *        userCertificate         CertificateSerialNumber,
 *        revocationDate          Time,
 *        crlEntryExtensions      Extensions OPTIONAL
 *                                 -- if present, version MUST be v2
 *                             }  OPTIONAL,
 *   crlExtensions           [0] Extensions OPTIONAL }
 *                                 -- if present, version MUST be v2
 * ```
 */
export declare class TBSCertList {
    version?: Version;
    signature: AlgorithmIdentifier;
    issuer: Name;
    thisUpdate: Time;
    nextUpdate?: Time;
    revokedCertificates?: RevokedCertificate[];
    crlExtensions?: Extension[];
    constructor(params?: Partial<TBSCertList>);
}
