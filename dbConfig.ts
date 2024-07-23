import { Property } from "src/entities/property.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const pgConfig:PostgresConnectionOptions = {
    //dont put this jere, Instead put in th env file 
    url: "postgresql://realEstateDB_owner:VWCh1OUB4xRD@ep-old-king-a5kltt9v.us-east-2.aws.neon.tech/realEstateDB?sslmode=require", 
    type: "postgres", 
    port: 3306, 
    entities: [__dirname+'/**/*.entity{.ts,.js}'], 
    synchronize: true,
};