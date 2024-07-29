import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/createCourse.dto';
import { ParseIdPipe } from './pipes/parseIdpipe';
import { UpdateCourseDto } from './dto/updateCourse.dto';
import { PaginationDTO } from './dto/pagination.dto';

@Controller('course')
export class CourseController {
    constructor(private courseService: CourseService){

    }

    @Get()
    findAll(@Query() paginationDTO:PaginationDTO){
        return this.courseService.findAll(paginationDTO);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id){
        return this.courseService.findOne(id);
    }

    @Post()

    create(@Body()
    dto: CreateCourseDto){
        return this.courseService.create(dto);
    }

    @Patch(":id")
    update(
        @Param('id', ParseIdPipe) id,
        @Body()
        body: UpdateCourseDto,
    ){
        return this.courseService.update(id, body);
    }

    @Delete(":id")
    delete(@Param('id', ParseIdPipe) id){
        return this.courseService.delete(id);
    }
}
