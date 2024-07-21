import { Controller, Get, Post, Patch, Put, Delete, Param, Body, HttpCode, ParseIntPipe, Query, ParseBoolPipe, UsePipes, ValidationPipe} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { retry } from 'rxjs';

@Controller('property')
export class PropertyController { 
    @Get()
    findAll(){
        return "All Properties";
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id, @Query("sort", ParseBoolPipe) sort){
        console.log(typeof id);
        console.log(typeof sort);
        return id;
    }

    @Post()
    //UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    //@HttpCode(202)
    create(@Body(new ValidationPipe({ 
        whitelist: true, 
        forbidNonWhitelisted: true, 
        groups: ['create'],
    })) 
    body: CreatePropertyDto){
        return body;
    }

    @Patch(":id")

    update(@Body(new ValidationPipe({ 
        whitelist: true, 
        forbidNonWhitelisted: true, 
        groups: ['update'],
    })) body: CreatePropertyDto){
        return body;
    }
}

