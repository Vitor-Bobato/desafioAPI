'use client';

import './index.scss';
import {useEffect, useState} from 'react';
import axios from 'axios';

export default function lista(){
    const[movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();
    },[])
    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params:{
                api_key: 'b9080120d29ef9d354ecf5bf08dfa5da',
                language: 'pt-BR'
            }
        }).then(response =>{
            console.log(response);
           setMovies(response.data.results);
        })
    }

    getMovies();



return(
    <ul className="movie-list">
        {movies.map((movie)=>
        <li className="movie-card">
            
            <p>
            {movie.title}
            </p> 

            <p className='description'>
                {movie.overview}
            </p>
        </li>
        )}
    </ul>
)
}