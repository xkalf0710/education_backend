import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    avatarUrl: string;

    @CreateDateColumn()
    createAt: Date;
    
    @OneToMany(()=> Course, (course) => course.user)
    courses: Course[];



    @ManyToMany(() => Course, (course) => course.likedBy)
    @JoinTable({ name: "user_liked_courses"})
    
    likedCourses: Course[]

}