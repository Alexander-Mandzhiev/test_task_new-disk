import { JwtModuleAsyncOptions } from '@nestjs/jwt';

export class ConfigService {
    private readonly envConfig: { [key: string]: any } = null;
    constructor() {
        this.envConfig = {};
        this.envConfig.port = process.env.API_PORT;
        this.envConfig.baseUri = process.env.BASE_URL;
    }

    get(key: string): any {
        return this.envConfig[key];
    }
}
