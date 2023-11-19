import kv from "./db.ts";

class Session {
  async set<T>(key: string, value: T, expireIn: number | undefined) {
    const { ok } = await kv.set(["sessions", key], value, { expireIn });
    return ok;
  }

  async get<T>(key: string) {
    const result = await kv.get<T>(["sessions", key]);
    return result.value;
  }

  async delete(key: string) {
    await kv.delete(["sessions", key]);
  }
}

export default Session;
