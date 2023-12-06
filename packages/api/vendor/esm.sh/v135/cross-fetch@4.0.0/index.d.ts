/// <reference lib="dom" />

declare const _fetch: typeof fetch;
declare const _Request: typeof Request;
declare const _Response: typeof Response;
declare const _Headers: typeof Headers;

declare module "https://esm.sh/v135/cross-fetch@4.0.0/index.d.ts" {
  export const fetch: typeof _fetch;
  export const Request: typeof _Request;
  export const Response: typeof _Response;
  export const Headers: typeof _Headers;
  export default fetch;
}

// added by esm.sh
declare module "https://esm.sh/v135/cross-fetch@4.0.0" {
  export * from "https://esm.sh/v135/cross-fetch@4.0.0/index.d.ts";
}
declare module "https://esm.sh/v135/cross-fetch@4.0.0?*" {
  export * from "https://esm.sh/v135/cross-fetch@4.0.0/index.d.ts";
}
declare module "https://esm.sh/cross-fetch@4.0.0" {
  export * from "https://esm.sh/v135/cross-fetch@4.0.0/index.d.ts";
}
declare module "https://esm.sh/cross-fetch@4.0.0?*" {
  export * from "https://esm.sh/v135/cross-fetch@4.0.0/index.d.ts";
}
