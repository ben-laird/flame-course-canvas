export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV?: "test" | "dev" | "prod";
      CANVAS_AUTH_TOKEN: string;
      CANVAS_ENDPOINT: string;
    }
  }
}
