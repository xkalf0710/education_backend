import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/entities/course.entity';

import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/createCourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';
import { PaginationDTO } from './dto/pagination.dto';
import { DEFAULT_PAGE_SIZE } from 'src/utils/constants';


@Injectable()
export class CourseService {

    constructor(@InjectRepository(Course)
     private courseRepo: Repository<Course>)
     {}

    async findAll(paginationDTO:PaginationDTO){
        return await this.courseRepo.find(
            {
            skip: paginationDTO.skip,
            take: paginationDTO.limit ?? DEFAULT_PAGE_SIZE,
            }
        );
    }

    async findOne(id: number){
        const property= await this.courseRepo.findOne({
            where:{
                id,
            },
        });

        if(!property) throw new NotFoundException();
        return property;
    }

    async create(dto:CreateCourseDto){
        return await this.courseRepo.save(dto)
    }

    async update(id: number, dto: UpdateCourseDto){
        return await this.courseRepo.update({id}, dto);
    }
    async delete(id: number){
        return await this.courseRepo.delete({
            id,
        });
    }
}
