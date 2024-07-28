import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course.entity";

@Entity()

export class Modules{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: 0})
    number: number;

    @OneToOne(() => Course, (course) => course.modules)
    @JoinColumn()
    course: Course;
}