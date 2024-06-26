import { registerAs } from '@nestjs/config';

export const sqlConfig = registerAs('database', () => ({
    type: `postgres`,
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    autoLoadEntities: true,
    synchronize: true,
}));
