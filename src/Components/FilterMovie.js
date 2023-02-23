import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGloalContext } from "./Context";


const FilterMovie = (props) => {

    const { GujMovie } = useGloalContext();
    const { UpdateMovie } = useGloalContext();
    const image_path = 'https://image.tmdb.org/t/p/w500';

    const [NewMovie, setNewMovie] = useState(UpdateMovie);

    const LanFilter = (original_language) => {
        const SelectMovie = UpdateMovie.filter((UpdateMovie) => {
            return UpdateMovie.original_language === original_language
        })
        setNewMovie(SelectMovie);
    }


    return (
        <>
            <div className="container-fluid">
                <h4 className="text-center text-white" style={{ 'marginTop': '20px' }}>{props.name}</h4>


                <div className="nav-scroller py-1 mb-2">
                    <nav className="nav d-flex justify-content-center">
                        <button className="btn btn-outline-light m-2 rounded-pill" href="#" onClick={() => LanFilter('hi')}>
                            Hindi
                        </button>
                        <button className="btn btn-outline-light m-2 rounded-pill" href="#" onClick={() => LanFilter('kn')}>
                            Kannada
                        </button>
                        <button className="btn btn-outline-light m-2 rounded-pill" href="#" onClick={() => LanFilter('ml')}>
                            Malyalam
                        </button>
                        <button className="btn btn-outline-light m-2 rounded-pill" href="#" onClick={() => LanFilter('ta')}>
                            Tamil
                        </button>
                        <button className="btn btn-outline-light m-2 rounded-pill" href="#" onClick={() => LanFilter('te')}>
                            Telugu
                        </button>
                        <button className="btn btn-outline-light m-2 rounded-pill" href="#" onClick={() => LanFilter('gu')}>
                            Gujarati
                        </button>
                    </nav>
                </div>



                <div className="row row-cols-1 row-cols-md-6 g-6 mt-5">
                    {
                        NewMovie.map((UpdateMovie, id) => {
                            return (
                                <>
                                    <div className="col-3">
                                        <div className="card border-0" key={id} style={{ 'width': '100%', 'backgroundColor': 'transparent' }}>
                                            <div className="middle text-center">
                                                <div className="zoom">
                                                    <Link to={`/SingleMovie/${UpdateMovie.id}`}>
                                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{UpdateMovie.original_language}</span>
                                                        <img src={image_path + UpdateMovie.poster_path} className="img-fluid" style={{ 'width': '100%', 'borderRadius': '20px' }} alt="..." />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title text-center text-white">{UpdateMovie.title
                                                }</h5>
                                                <h6 className="card-title text-center text-white text-secondary">{UpdateMovie.release_date
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



            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-6 g-6 mt-5">
                    {
                        GujMovie.map((NewMovie, id) => {
                            return (
                                <>
                                    <div className="col-3">
                                        <div className="card border-0" key={id} style={{ 'width': '100%', 'backgroundColor': 'transparent' }}>
                                            <div className="middle text-center">
                                                <div className="zoom">
                                                    <Link to={`/SingleMovie/${NewMovie.id}`}>
                                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{NewMovie.original_language}</span>
                                                        <img src={image_path + NewMovie.poster_path} className="img-fluid" style={{ 'width': '100%', 'borderRadius': '20px' }} alt="..." />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title text-center text-white">{NewMovie.title
                                                }</h5>
                                                <h6 className="card-title text-center text-white text-secondary">{NewMovie.release_date
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

export default FilterMovie;
