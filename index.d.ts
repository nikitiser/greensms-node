export interface GreenSMSOptions {
  user?: string;
  pass?: string;
  token?: string;
  useTokenForRequests?: boolean;
  version?: "V1";
  camelCaseResponse?: boolean;
}

export interface GreenSMSGet {
  <T>(params?: any): Promise<T>;
}

export interface GreenSMSPost {
  <T>(params: any): Promise<T>;
}

export type GreenSMSModule<TGet extends keyof any, TPost extends keyof any> = {
  [P in TGet]: GreenSMSGet;
} & {
  [P2 in TPost]: GreenSMSPost;
};

export declare class GreenSMS {
  /**
   * Creates a GreenSMS Client Object
   * @constructor
   * @param GreenSMSOptions
   */
  constructor(opts: GreenSMSOptions);

  account: GreenSMSModule<"balance" | "tarif", "token">;

  call: GreenSMSModule<"status", "send">;

  hlr: GreenSMSModule<"status", "send">;

  pay: GreenSMSModule<"status", "send">;

  sms: GreenSMSModule<"status", "send">;

  viber: GreenSMSModule<"status", "send">;

  voice: GreenSMSModule<"status", "send">;

  social: GreenSMSModule<"status", "send">;

  general: GreenSMSModule<"status", never>;

  whois: GreenSMSModule<"lookup", never>;
}

export default GreenSMS;
