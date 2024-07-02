import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './interfaces/book.interface';
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
    
    constructor(private readonly booksService: BooksService){}

    @Get()
    async findAll():Promise<Book[]>{
        return this.booksService.findAll();
    };

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Book>{
        return this.booksService.findOne(id);
    };

    @Post()
    async create(@Body() createBookDTO: CreateBookDTO): Promise<Book>{
        return this.booksService.create(createBookDTO);
    };

    @Put(':id')
    async update(@Param('id') id: string, @Body() createBookDTO: CreateBookDTO): Promise<Book>{
        return this.booksService.update(id, createBookDTO);
    };

    @Delete(':id')
    async delete(@Param('id') id: string){
        return this.booksService.delete(id);
    };

}
