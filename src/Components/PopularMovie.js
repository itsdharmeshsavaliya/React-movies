import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const PopularMovie = (props) => {

    const [PopularMovie, setPopularMovie] = useState([]);

    const Image_url = 'https://image.tmdb.org/t/p/w500/';

    const PopMovie = async () => {
        const Movie_url = `https://api.themoviedb.org/3/discover/movie?api_key=779ddb0c8d4df75a38713793976d001e&language=en-US&sort_by=popularity.desc&page=3&primary_release_year=2019&with_original_language=hi|kn|ml|ta|te`;
        try {
            const Response = await fetch(Movie_url);
            const data = await Response.json();
            setPopularMovie(data.results);
        }
        catch (error) {
            setPopularMovie(error);
        }
    }




    useEffect(() => {
        PopMovie();
    }, []);

    return (
        <>
            <div className="container-fluid">
                <h2 className="text-center text-white mt-5">{props.title}</h2>
                <div className="row row-cols-1 row-cols-md-6 g-6 mt-5">
                    {
                        PopularMovie.map((PopularMovie) => {
                            return (
                                <>
                                    <div className="col-3">
                                        <div className="card border-0" style={{ 'width': '100%', 'backgroundColor': 'transparent' }}>
                                            <div className="middle text-center">
                                                <Link to={`/SingleMovie/${PopularMovie.id}`}>
                                                    <div className="zoom">
                                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{PopularMovie.vote_average}</span>
                                                        <img src={Image_url + PopularMovie.poster_path} className="img-fluid" style={{ 'width': '100%', 'borderRadius': '20px' }} alt="..." />
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title text-center text-white">{PopularMovie.title
                                                }</h5>
                                                <h6 className="card-title text-center text-white text-secondary">{PopularMovie.release_date
                                                }</h6>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default PopularMovie;
