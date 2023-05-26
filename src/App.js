import React, { useState } from "react";
import { useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg';

import MovieCard from "./MovieCard";
// a420daff
const API_URL= 'http://omdbapi.com?apikey=a420daff'
// const movie1={
//     "Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
//     "Year": "2007",
//     "imdbID": "tt1132238",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg"
// }

const App= () => {
    const [movies, setMovies] = useState([]);
    const[searchTerm, setSearchTerm] = useState('');

    const searchMovies=async(title)=>{
        const reponse= await fetch(`${API_URL}&s=${title}`)
        const data= await reponse.json();
       setMovies(data.Search);

    }
    useEffect(()=>{
        searchMovies('Spiderman');

    }, [])
    return(
        <div className="app"> 
        <h1>MovieLand</h1>

        <div className="search">
            <input 
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)} 
            />  
            <img 
            src={SearchIcon} 
            alt="search"
            onClick={()=>searchMovies(searchTerm)}
             /> 
            </div>

            {movies?.length >0
                ? (<div className="container">
                {
                    movies.map((movie)=>(
                        <MovieCard key={movie.imdbID} movie={movie}/>

                    ))}
    
                    </div>

                ) : 
                (
                    <div className="empty">
                        <h2>   No movies found </h2>
                        </div>
                )
            }
            
          </div>
    );
}
export default App;