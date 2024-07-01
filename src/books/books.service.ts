import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './interface/book.interface';
import { CreateBookDTO } from './dto/create-book.dto';

@Injectable()
export class BooksService {

    constructor(@InjectModel('Book') private readonly BookModel: Model<Book>){}

    async findAll(): Promise<Book[]>{
        return this.BookModel.find().exec();
    };

    async findOne(bookID: string): Promise<Book>{
        return this.BookModel.findById(bookID).exec();
    };

    async create(createBookDTO:CreateBookDTO): Promise<Book>{
        const createdBook = new this.BookModel(createBookDTO)
        return createdBook;
    }
}
