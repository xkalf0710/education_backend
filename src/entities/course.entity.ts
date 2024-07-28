

import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Modules } from "./modules.entity";
import { User } from "./user.entity";

@Entity()
export class Course{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    description: string;

    @Column({ default: 0})
    price: number;

    @Column()
    is_progress_limited: string;

    @OneToOne(() =>  Modules, (modules) => modules.course, {
        cascade: true    })
    modules:  Modules;


    @ManyToOne(() => User, (user)=> user.courses)
    @JoinColumn({ name: 'ownerId' })
    user: User;


    @ManyToMany(() => User, (user)=> user.likedCourses)
    likedBy: User[];
}    
