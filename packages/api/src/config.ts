class Config {
  static rpName = "Webauthn Example";
  static rpID = "localhost";
  static secret = "secret passphrase";
  static challengeTTL = 900_000; // 900s (15m)
  static databasePath = "./kv.sqlite3";
}

const config = Config;
export default config;
