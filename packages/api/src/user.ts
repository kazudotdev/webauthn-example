import * as uuid from "$std/uuid/mod.ts";
import kv from "./db.ts";

export type UserData = {
  email: string;
  id: string;
  verified: boolean;
};

class User {
  constructor() {}
  async findByEmail(email: string) {
    const result = await kv.get<UserData>(["users", email]);
    return result.value;
  }

  async add(email: string) {
    const user = await this.findByEmail(email);
    if (user == null) {
      const user: UserData = {
        email,
        id: uuid.v1.generate().toString(),
        verified: false,
      };
      const { ok } = await kv.set(["users", email], user);
      if (ok) {
        return user;
      }
      return null;
    } else {
      return user;
    }
  }
}

export const user = new User();
