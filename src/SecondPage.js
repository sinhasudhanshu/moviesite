import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import {API_URL} from"./context";

const SecondPage = () => {
    const {id} = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState("");
    
    const getMovies = async (url) => {

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data);
            } 
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
       let timerout= setTimeout(() => {
            
        getMovies(`${API_URL}&i=${id}`);

        }, 600);

        return () => clearTimeout(timerout); 

    }, [id]);

    if(isLoading){
      return(
        <div className="movie-section">
          <div className="loading">Loading...</div>
        </div>
      )
    }


  return (
    
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} /> 
        </figure>

        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="title">{movie.Genre}</p>
          <p className="title">{movie.Released}</p>
          <p className="title">{movie.imdbRating}</p>
          <p className="title">{movie.Country}</p>
          <NavLink to="/" className="back-btn">Go Back</NavLink>

        </div>

      </div>
    </section>
       
  );
};

export default SecondPage;