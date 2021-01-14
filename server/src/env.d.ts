declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string;
    PORT: string;
    CORS_ORIGIN: string;
    DOMAIN: string;
    JWT_SECRET_KEY: string;
    JWT_COOKIE_NAME: string;
    ROOT_USERNAME: string;
    ROOT_EMAIL: string;
    ROOT_PASSWORD: string;
  }
}
