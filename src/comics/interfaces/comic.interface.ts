import { Document } from "mongoose";

export interface Comic extends Document{
    title: string,
    author: string,
    publishedDate: Date,
    pages: number
}