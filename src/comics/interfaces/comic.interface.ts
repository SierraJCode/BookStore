import { Document } from "mongoose";

export interface comic extends Document{
    title: string,
    author: string,
    publishedDate: Date,
    pages: number
}