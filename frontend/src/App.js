import './App.css';
import { Routes , Route} from "react-router-dom";
import Home from './components/Home';
import CreateBooks from './components/CreateBook';
import EditBook from './components/EditBook';
import DeleteBook from './components/DeleteBook';
import BookDetail from './components/BookDetail';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBooks/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/details/:id' element={<BookDetail/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
    </Routes>
  );
}

export default App;
