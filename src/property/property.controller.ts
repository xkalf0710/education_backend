import { Controller, Get, Post, Patch, Put, Delete, Param, Body, HttpCode, ParseIntPipe,Headers, Query, ParseBoolPipe, UsePipes, ValidationPipe} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { ZodValidationPipe } from './pipes/zodValidatinPipe';
import { createPropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { RequestHeader } from './pipes/request-header';
import { HeadersDto } from './dto/headers.dto';
import { PropertyService } from './property.service';





@Controller('property')
export class PropertyController { 

    
    constructor(private propertyService: PropertyService){
        
    }


    @Get()
    findAll(){
      return  this.propertyService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id, @Query("sort", ParseBoolPipe) sort){
        return this.propertyService.findOne();
    }

    @Post()
    //UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    //@HttpCode(202)
    @UsePipes(new ZodValidationPipe(createPropertySchema))
    create(@Body()
    body: CreatePropertyZodDto){
        return this.propertyService.create();
    }

    @Patch(":id")

    update(
        @Param('id', ParseIntPipe) id,
        @Body() 
        body: CreatePropertyDto,
        @RequestHeader(new ValidationPipe({ whitelist: true, validateCustomDecorators: true })) header: HeadersDto,
    ) {
        return this.propertyService.update();
    }
}

