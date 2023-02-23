import React, { useContext, useEffect, useState } from "react";
import axios from "axios";


const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [NewMovies, setNewMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [Loader, setLoader] = useState(false);


    const getMovies = async () => {
        try {
            let API_URL = `https://www.omdbapi.com/?apikey=727bbdc1&`;
            const Response = await fetch(`${API_URL}&s=${query}`);
            const data = await Response.json();
            setNewMovies(data.Search);

        }
        catch (error) {
            setNewMovies(error);

        }
    }


    useEffect(() => {
        getMovies();
    }, []);


    const [GujMovie, setGujMovie] = useState([]);

    const GujMovies = async () => {
        try {
            const GujMovie_url = `https://api.themoviedb.org/3/discover/movie?api_key=779ddb0c8d4df75a38713793976d001e&language=en-US&sort_by=popularity.desc&page=1&primary_release_year=2022&with_original_language=gu`;
            const Response = await fetch(GujMovie_url);
            const data = await Response.json();
            setGujMovie(data.results);

        }
        catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        GujMovies()
    }, []);



    const [UpdateMovie, setUpdateMovie] = useState([]);

    const LangMovie = () => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=779ddb0c8d4df75a38713793976d001e&language=en-US&sort_by=popularity.desc&page=1&primary_release_year=2022&with_original_language=hi|kn|ml|ta|te`)
            .then(Response => {
                setUpdateMovie(Response.data.results);
            })
    }



    useEffect(() => {
        LangMovie();
    }, []);

    return <AppContext.Provider value={{ NewMovies, query, setQuery, Loader, setLoader, GujMovie, UpdateMovie }}>{children}</AppContext.Provider>
}



const useGloalContext = () => {
    return useContext(AppContext);
}







const Context = () => {

};

export default Context;
export { AppContext, AppProvider, useGloalContext }