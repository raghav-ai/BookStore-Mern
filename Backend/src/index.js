import express, {response} from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import Router from "./routes/BookRoutes.js";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(cors());
app.get('/', (request,response) => {
    console.log(request)
    return response.status(234).send("welcome to mern stack tutorial")
});

app.use("/books", Router);
mongoose
.connect(mongoDBURL)
.then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
        console.log('port is working');
    });

})
.catch((error) => {
    console.log(error)
});