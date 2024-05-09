import React,{useEffect,useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import Spinner from "./spinner";

const BookDetail = () =>{
    const [book,SetBook] = useState({});
    const [Loading, SetLoading] = useState(false);
    const { id } = useParams();

    useEffect(()=>{
        SetLoading(true);
        axios
        .get(`http://localhost:5555/books/${id}`)
        .then((response) => {
            SetBook(response.data);
            SetLoading(false);
        })
        .catch((error) =>{
            console.log(error);
            SetLoading(false)
        });
    },[]);

    return(
        <div className="p-4">
            <BackButton/>
            <h1 className="text-3xl my-4">Show Book </h1>
            {Loading? (
                <Spinner/>
            ):(

                <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Id:</span>
                        <span>{book._id}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">title:</span>
                        <span>{book.title}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Author:</span>
                        <span>{book.author}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Year:</span>
                        <span>{book.publishYear}</span>
                    </div>

                </div>
            )
        }
        </div>
    );
}
export default BookDetail;