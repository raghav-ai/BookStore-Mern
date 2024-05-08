import mongoose, { mongo } from "mongoose";

const BookStore = mongoose.Schema(
    {
        title : {
            type:String,
            required:true,
        },
        seller : {
            type:String,
            required:true,
        },
        year :{
            type:Number,
            required:true,
        }
        
    },
    {
        timestamps : true,
    }
);

export const Book = mongoose.model('Books', BookStore);
