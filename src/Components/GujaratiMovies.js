import React from "react";
import { useGloalContext } from "./Context";
import { Link } from "react-router-dom";

const GujaratiMovies = () => {

    const { GujMovie } = useGloalContext();
    const image_path = 'https://image.tmdb.org/t/p/w500';


    return (
        <>
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-6 g-6 mt-5">
                    {
                        GujMovie.map((GujMovie, id) => {
                            return (
                                <>
                                    <div className="col-3">
                                        <div className="card border-0" key={id} style={{ 'width': '100%', 'backgroundColor': 'transparent' }}>
                                            <div className="middle text-center">
                                                <div className="zoom">
                                                    <Link to={`/SingleMovie/${GujMovie.id}`}>
                                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{GujMovie.original_language}</span>
                                                        <img src={image_path + GujMovie.poster_path} className="img-fluid" style={{ 'width': '100%', 'borderRadius': '20px' }} alt="..." />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title text-center text-white">{GujMovie.title
                                                }</h5>
                                                <h6 className="card-title text-center text-white text-secondary">{GujMovie.release_date
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
            {/* <h3 style={{ 'marginTop': '100px', 'color': 'white' }}> NEWMOVIES</h3> */}
        </>
    );
};

export default GujaratiMovies;
