import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TrendMovie } from "./NewContext";


const TrandingMovies = () => {

    const HotMovies = useContext(TrendMovie);
    const image_path = 'https://image.tmdb.org/t/p/w500';



    return (
        <>

            <div className="container-fluid">
                <h4 className="text-center text-white" style={{ 'marginTop': '40px' }}>Trending Movies</h4>
                <div className="row row-cols-1 row-cols-md-6 g-6 mt-5">
                    {
                        HotMovies.map((HotMovies, id) => {
                            return (
                                <>
                                    <div className="col-3">
                                        <div className="card border-0" key={id} style={{ 'width': '100%', 'backgroundColor': 'transparent' }}>
                                            <div className="middle text-center">
                                                <div className="zoom">
                                                    <Link to={`/SingleMovie/${HotMovies.id}`}>
                                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{HotMovies.original_language}</span>
                                                        <img src={image_path + HotMovies.poster_path} className="img-fluid" style={{ 'width': '100%', 'borderRadius': '20px' }} alt="..." />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title text-center text-white">{HotMovies.title
                                                }</h5>
                                                <h6 className="card-title text-center text-white text-secondary">{HotMovies.release_date
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

export default TrandingMovies;
