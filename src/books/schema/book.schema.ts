import { Schema } from "mongoose";

export const BookSchema = new Schema ({
    title: { type: String, required: true},
    author: { type: String, required: true},
    publishedDate: { type: Date, required: true},
    pages: { type: Number, required: true},
    genre: { type: String, required: true},
});