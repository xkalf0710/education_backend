import { Module, ValidationPipe } from '@nestjs/common';
import { CourseController } from './course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/entities/course.entity';
import { APP_PIPE } from '@nestjs/core';
import { CourseService } from './course.service';

@Module({
    controllers: [CourseController],
    imports: [TypeOrmModule.forFeature([Course])],
    providers: [
        {
            provide: APP_PIPE,
            useValue: new ValidationPipe({
                whitelist: true, 
                forbidNonWhitelisted: true,
                transform: true,
                transformOptions: {
                enableImplicitConversion: true,
        }
            }),
        },

        CourseService,
    ],
})
export class CourseModule {}
