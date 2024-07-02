import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ComicsService } from './comics.service';
import { CreateComicDTO } from './dto/comic.dto';
import { Comic } from './interfaces/comic.interface';

@Controller('comics')
export class ComicsController {

    constructor(private readonly comicsService: ComicsService){}

    @Get()
    async findAll(): Promise<Comic[]>{
        return this.comicsService.findAll();
    };

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Comic>{
        return this.comicsService.findOne(id);
    }

    @Post()
    async create(@Body() createComicDTO: CreateComicDTO): Promise<Comic>{
        return this.comicsService.add(createComicDTO);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() createBookDTO:CreateComicDTO){
        return this.comicsService.update(id, createBookDTO);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return this.comicsService.delete(id);
    }
}
