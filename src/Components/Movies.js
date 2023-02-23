import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGloalContext } from "./Context";



const Movies = () => {

    const [SearchMovie, setNewMovies] = useState([]);
    const { NewMovies } = useGloalContext();
    // loader

    const { query, setQuery } = useGloalContext();

    const getMovies = async () => {
        let API_URL = `https://www.omdbapi.com/?apikey=727bbdc1&s`;
        const Response = await fetch(`${API_URL}&s=${query}`);
        const data = await Response.json();
        setNewMovies(data.Search);
    }




    return (
        <>

            <img src="images/2.webp" alt="" width={'100%'} />

            <h2 className="text-center text-white mt-3">Millions of movies to discover, Explore now.</h2>


            <div className="container mt-5">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Your Movie"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        <button
                            className="btn btn-outline-info"
                            type="submit"
                            id="button-addon2"
                            onClick={getMovies}
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>


            <div className="container mt-5" style={{ 'textAlign': '-webkit-center' }}>
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        SearchMovie.map((NewMovies) => {
                            return (
                                <div className="col-2" key={NewMovies.Poster}>
                                    <div className="card border-0" key={NewMovies.id} style={{ width: "18rem" }}>
                                        <Link to={`/SingleMovie/${NewMovies.imdbID}`}>
                                            <div className="zoom">
                                                <img src={NewMovies.Poster} className="img-fluid" style={{ 'width': '100%', 'borderRadius': '20px' }} alt="..." />
                                            </div>
                                        </Link>
                                        <div className="card-body">
                                            <h5 className="card-title text-center text-white">{NewMovies.Title}</h5>
                                            <h6 className="card-title text-center text-white">{NewMovies.Year}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
};

export default Movies;
