import React, { createContext, useEffect, useState } from "react";
import TrendingMovies from "./TrendingMovies";
import axios from 'axios';




const TrendMovie = createContext();
const NewContext = () => {

    const [HotMovies, setHotMovies] = useState([]);


    const getTrends = () => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?india_country=US&certification.lte=G&sort_by=popularity.desc&page=3&api_key=779ddb0c8d4df75a38713793976d001e`)
            .then(Response => {
                setHotMovies(Response.data.results)
            })
    }


    useEffect(() => {
        getTrends();
    }, []);


    return (
        <>
            <TrendMovie.Provider value={HotMovies}>
                <TrendingMovies />
            </TrendMovie.Provider>

        </>
    );
};

export default NewContext;
export { TrendMovie }
