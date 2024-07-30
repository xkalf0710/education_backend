import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import * as path from "path";
import { registerAs } from "@nestjs/config";

export default registerAs("dbconfig.dev", ():PostgresConnectionOptions =>({
    //dont put this jere, Instead put in th env file 
    url: process.env.url, 
    type: "postgres", 
    port: +process.env.port,
    entities: [path.resolve(__dirname,".." ) + '/**/*.entity{.ts,.js}'], 
    synchronize: true,
}));