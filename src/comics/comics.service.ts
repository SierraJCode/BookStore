import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comic } from './interfaces/comic.interface';
import { Model } from 'mongoose';
import { CreateComicDTO } from './dto/comic.dto';


@Injectable()
export class ComicsService {

    constructor(@InjectModel('Comic')  private readonly comicModel: Model<Comic>){}

    async findAll(){
        return this.comicModel.find().exec();
    };

    async findOne(id: string){
        return this.comicModel.findById(id).exec();
    };

    async add(createComicDTO: CreateComicDTO){
        return this.comicModel.create(createComicDTO);
    };

    async update(id: string, createComicDTO: CreateComicDTO){
        return this.comicModel.findByIdAndUpdate(id, createComicDTO, {new: true}).exec();
    };

    async delete(id: string){
        return this.comicModel.findByIdAndDelete(id).exec();
    };

}
