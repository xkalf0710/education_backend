import { Faker } from "@faker-js/faker";
import { Modules } from "../entities/modules.entity";
import { setSeederFactory } from "typeorm-extension";

export const ModulesFactory = setSeederFactory(Modules, (faker: Faker) => {
    const modules = new Modules();
    
    modules.name = faker.lorem.sentence();
    
    modules.number = faker.number.int({ min: 1, max: 1000});
    return modules;
});