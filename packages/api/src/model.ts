export type SessionData = {
  challenge: string;
  email: string;
  id: string;
  verified: boolean;
};

export type CredentialData = {
  credentialId: string;
  credentialPublicyKey: Uint8Array;
  counter: number;
  credentialDeviceType: string;
  userId: string;
};
