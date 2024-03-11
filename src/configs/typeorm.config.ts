import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from 'dotenv'; // dotenv 라이브러리 import

dotenv.config(); // .env 파일에서 환경 변수를 로드합니다.

export const typeORMConfig : TypeOrmModuleOptions = {
    type: 'postgres',

    // host: 'localhost',
    // port: 5432,
    // username: 'postgres',
    // password:'sebin',
    // database:'envtestDB',

    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    autoLoadEntities: true
}
//