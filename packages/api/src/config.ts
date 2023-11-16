const config = {
  secret: Bun.env.JWT_SECRET ?? "development",
  database: Bun.env.DATABASE ?? "my.db",
  rpID: Bun.env.WEBAUTHN_RP_ID ?? "localhost",
  rpName: Bun.env.WEBAUTHN_RP_NAME ?? "Passkeys example",
  challengeTtl: Bun.env.WEBAUTHN_CHALLENGE_TTL ?? "60000",
};

export default config;
