/// <reference lib="deno.unstable" />
import { AuthenticatorDevice } from "@simplewebauthn/typescript-types";
import { isoBase64URL } from "@simplewebauthn/helper";

const kv = await Deno.openKv("./kv.sqlite3");

const expireIn = 300_000; //5min

export const setChallenge = async (uuid: string, challenge: string) => {
  console.log({ type: "setChallenge", uuid, challenge });
  await kv.set(["challenges", uuid], challenge, { expireIn });
};

export const getChallenge = async (uuid: string) => {
  const { value } = await kv.get<string>(["challenges", uuid]);
  console.log({ type: "getChallenge", uuid, challenge: value });
  return value;
};

export const getAuthenticators = async (uuid: string) => {
  const { value: authenticators } = await kv.get<AuthenticatorDevice[]>([
    "authenticators",
    uuid,
  ]);
  console.log({ type: "getAuthenticators", authenticators, uuid });
  if (!authenticators) throw new Error("No invalid authenticators");
  return authenticators;
};

export const getAuthenticator = async (uuid: string, credentialID: string) => {
  const authenticators = await getAuthenticators(uuid);
  const authenticator = authenticators.find((authenticator) => {
    const cred = isoBase64URL.fromBuffer(authenticator.credentialID);
    console.log({ type: "getAuthenticator", credentialID, cred });
    return credentialID === cred;
  });
  if (!authenticator) throw new Error("No invalid authenticator");
  return authenticator;
};

export const addAuthenticator = async (
  uuid: string,
  authenticator: AuthenticatorDevice,
) => {
  const { value } = await kv.get<AuthenticatorDevice[]>([
    "authenticators",
    uuid,
  ]);
  const authenticators = value ? [...value, authenticator] : [authenticator];
  console.log({ type: "addAuthenticator", uuid, authenticators });
  await kv.set(["authenticators", uuid], authenticators);
};

export const createUser = async (username: string, uuid: string) => {
  await kv.set(["users", username], uuid);
};

export const getUUID = async (username: string) => {
  const { value } = await kv.get<string>(["users", username]);
  if (!value) throw new Error("User not found");
  return value;
};

export const updateAuthenticatorCounter = async (
  uuid: string,
  authenticator: AuthenticatorDevice,
  counter: number,
) => {
  const { value: authenticators } = await kv.get<AuthenticatorDevice[]>([
    "authenticators",
    uuid,
  ]);
  if (!authenticators) throw new Error("User not found");

  const index = authenticators.findIndex(
    (_authenticator) =>
      new TextDecoder().decode(authenticator.credentialID) ===
      new TextDecoder().decode(_authenticator.credentialID),
  );

  if (index === -1) throw new Error("Authenticator not found");

  authenticators[index].counter = counter;

  await kv.set(["authenticators", uuid], authenticators);
};
