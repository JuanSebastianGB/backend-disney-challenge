enum Cases {
  TEST = 'test',
  DEVELOPMENT = 'development',
}
interface IConfig {
  PORT: string;
  DB_NAME: string;
  DB_USER: string;
  DB_PASS: string;
}
let config = {} as IConfig;
switch (process.env.NODE_ENV) {
  case Cases.TEST:
    {
      config = {
        PORT: process.env.PORT_TEST || '3000',
        DB_NAME: process.env.DB_NAME_TEST || 'name',
        DB_USER: process.env.DB_USER_TEST || 'user',
        DB_PASS: process.env.DB_PASS_TEST || 'pass',
      };
    }
    break;
  case Cases.DEVELOPMENT: {
    config = {
      PORT: process.env.PORT_DEV || '3000',
      DB_NAME: process.env.DB_NAME_DEV || 'name',
      DB_USER: process.env.DB_USER_DEV || 'user',
      DB_PASS: process.env.DB_PASS_DEV || 'pass',
    };
  }
  default:
    break;
}

export { config };
