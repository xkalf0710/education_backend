import dbConfig from "../config/db.config";
import { DataSource, DataSourceOptions } from "typeorm";
import { runSeeders, SeederOptions } from "typeorm-extension";
import { CourseFactory } from "./course.factory";
import { UserFactory } from "./user.factory";
import { ModulesFactory } from "./modules.factory";
import { MainSeeder } from "./main.seeder";



const options: DataSourceOptions & SeederOptions ={
    ...dbConfig(),
    factories: [CourseFactory, UserFactory, ModulesFactory], 
    seeds: [MainSeeder]
}

const dataSource = new DataSource(options);
dataSource.initialize().then(async() => {
    await dataSource.synchronize(true);
    await runSeeders(dataSource);
    process.exit();
})