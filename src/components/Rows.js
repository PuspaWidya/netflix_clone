import React, { useEffect, useState } from 'react'
import './Rows.css'
import axios from './axios'

export default function Rows({title, fetchUrl, isLargeRow =false}) {

    let [movies, setMovies] = useState([])
    const baseUrl = `https://image.tmdb.org/t/p/original/`


    useEffect(() => {
        console.log(fetchUrl)
        async function fetchMovie(){
            const request = await axios.get(fetchUrl)
            // console.log(request,'INI REQUEST')
            setMovies(request.data.results)

            // console.log(movies,'INI MOVIES')
            // return request
        }
        fetchMovie()
    }, [fetchUrl])


if(movies.length < 1){
    return(
        <h1>LOADING</h1>
    )
}


    return (

        <div className='row'>
            <h2>{title}</h2>

            <div className="row_posters">
            {
                
                movies?.map(
                    (movie) =>
                      (isLargeRow && movie.poster_path) ||
                      (!isLargeRow && movie.backdrop_path) && 
                        (   <img 
                            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                            key={movie.id}
                            src={`${baseUrl}${
                                isLargeRow? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}/>
                        
                        
                    )
                )
            }
            </div>
        </div>
    )
}
