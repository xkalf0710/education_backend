import { faker } from "@faker-js/faker";
import { Course } from "../entities/course.entity";
import { User } from "../entities/user.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Modules } from "../entities/modules.entity";


export class MainSeeder implements Seeder{
    public async run(dataSource: DataSource, factoryManager: SeederFactoryManager): 
    
    Promise<any>{
        
        const userFactory = factoryManager.get(User);
        console.log("seeding users");

        const users = await userFactory.saveMany(10);

        const courseFactory = factoryManager.get(Course)
  

        const courses = await Promise.all(
            Array(50).fill("").map(async() => {
                const course = await courseFactory.make({
                    user: faker.helpers.arrayElement(users),
               
                });
                return course;
            })
        ) ;
        
        const propertyRepo = dataSource.getRepository(Course);
        await propertyRepo.save(courses);
       }
}