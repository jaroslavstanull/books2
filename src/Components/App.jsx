import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import Book from './Book';


function App() {

    const [books,setBooks]=useState([]);

    useEffect(()=>{
        console.log('Start');
        axios.get('https://in3.dev/knygos/')
        .then(function (response) {
            console.log(response.data);
            setBooks(response.data);
        })
    }, []);


    

    
    render()

    return (< div className="book-container">
        {books.map((book)=>(<Book key={book.id} data={book}></Book>))}
    </div>);
    }
    
export default App;