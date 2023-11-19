import kv from "./db.ts";
import { CredentialData } from "./model.ts";

class _Credential {
  async set(id: string, data: CredentialData): Promise<void> {
    await kv.set(["credentials", id], data);
  }
}

export const Credential = new _Credential();
