import express from "express";
import { Book } from "../models/bookModel.js";

const Router = express.Router();
Router.get('/', async(request,response) => {
    try{
        const books = await Book.find({});
        return response.status(200).json({
            count: books.length,
            data: books
        });
    }catch(error){
        console.log(error.message);
        return response.status(500).send({message: error.message});
    }
});
Router.get('/:id', async(request,response) => {
    try{
        const { id } = request.params;
        const book = await Book.findById(id);
        return response.status(200).json(book);
    }catch(error){
        console.log(error.message);
        return response.status(500).send({message: error.message});
    }
});
Router.delete("/:id", async(request,response) => {
    try{
        const {id} = request.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return response.status(404).send({message:"element with given id not found"});
        }
        return response.status(200).send({message: "element deleted successfully"})
    } catch(error){
        console.log(error.message);
        return response.status(500).send({message: error.message})
    }
});
Router.put('/:id',async (request,response) => {
        try{
            if(
                !request.body.title ||
                !request.body.author ||
                !request.body.publishYear
            ){
                return response.status(400).send({
                    message: "Send all the required data - title,author,published year",
                });
            }
            const {id} = request.params;
            const result = await Book.findByIdAndUpdate(id,request.body);
            if(!result){
                return response.status(404).send({message: "book not found"});
            }
            return response.status(200).send({message:"Book updated successfully"});
        }catch(error){
            console.error(error.message);
            return response.status(500).send({message: error.message});
        }
});

Router.post('/create', async (request,response) =>{
    try{
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ){
            return response.status(400).send({
                message: "Send all the required data - title,author,published year",
            });
        }
        const newBook = {
            title : request.body.title,
            author : request.body.author,
            publishYear: request.body.publishYear,
        };
        const book = await Book.create(newBook);
        return response.status(200).send(book);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
} );

export default Router;