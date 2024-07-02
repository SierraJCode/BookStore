import { Schema } from "mongoose";

export const ComicSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    publishedDate: {type: String, required: true},
    pages: {type: Number, required: true}
})