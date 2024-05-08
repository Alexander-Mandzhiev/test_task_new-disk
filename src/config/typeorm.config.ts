import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { ConfigService } from '@nestjs/config';


@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService) { }

    createTypeOrmOptions(): TypeOrmModuleOptions {

        const {
            sql: { type, host, port, username, password, database, entities },
        } = this.configService.get('database');

        return {
            type,
            host,
            port,
            username,
            password,
            database,
            entities,
            autoLoadEntities: true,
            synchronize: true,
        };
    }
}
