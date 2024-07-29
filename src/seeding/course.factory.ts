import { Faker } from "@faker-js/faker";
import { Course } from "../entities/course.entity";
import { setSeederFactory } from "typeorm-extension";

export const CourseFactory = setSeederFactory(Course, (faker: Faker) => {
    const course = new Course();
    
    course.name = faker.lorem.sentence();
    course.description = faker.lorem.sentence();
    course.price = +faker.commerce.price({ min: 10000, max: 10000000});
    course.is_progress_limited = faker.lorem.sentence();
    return course;
});