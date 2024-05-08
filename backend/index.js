import express, { response } from "express"
import { PORT, MongoUrl } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();
app.use(express.json());

mongoose
    .connect(MongoUrl)
    .then(() => {
        console.log("PORT awakend");
        app.listen(PORT,()=>{

        });
    })
    .catch((error) => {
        console.log(error);
    })

    app.post('/books', async(request,response)=>{
        try{
            if(!request.body.title ||!request.body.seller||!request.body.year){
                return response.status(401).send({
                    message:"empty fields exist",
                });
            }
            const NewBook = {
                title:request.body.title,
                seller:request.body.seller,
                year : request.body.year,
            }
            const book = await Book.create(NewBook);
            return response.status(201).send(book);
        }
        catch(error){
            console.log(error.message);
        }
    });
    