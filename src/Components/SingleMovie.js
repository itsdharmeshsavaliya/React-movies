import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi"



const SingleMovie = () => {

    const { id } = useParams();

    const [Detail, setDetail] = useState("");
    const image_url = `https://image.tmdb.org/t/p/w500/`;



    const MovieDetail = async () => {
        try {
            const Response = await fetch(`https://api.themoviedb.org/3/movie/${id}?with_genres=18&sort_by=vote_average.desc&vote_count.gte=11&page=2&api_key=779ddb0c8d4df75a38713793976d001e`);
            const data = await Response.json();
            setDetail(data);
        }
        catch (error) {
            setDetail(error);
        }
    }



    useEffect(() => {
        MovieDetail();
    }, []);

    const backdrop_path = Detail ? `${image_url}${Detail.backdrop_path}` : '';
    const poster_path = Detail ? `${image_url}${Detail.poster_path}` : '';
    const original_title = Detail ? `${Detail}${Detail.original_title}` : '';
    const overview = Detail ? `${Detail}${Detail.overview}` : '';
    const homepage = Detail ? `${Detail}${Detail.homepage}` : '';
    const tagline = Detail ? `${Detail}${Detail.tagline}` : '';



    return (
        <>
            {/* <div className="text-white">{id} SingleMovie</div> */}
            <div className="container-fluid" style={{ 'backgroundImage': `url(${backdrop_path}`, 'height': '400px' }}></div>


            <div className="container Movie-image" style={{ 'marginTop': '80px' }}>
                <div className="row">
                    <div className="col-4">
                        <img width={'70%'} src={`${poster_path}`} alt="" style={{ 'borderRadius': '20px' }} />
                    </div>
                    <div className="col-8">

                        <Link className="text-decoration-none" to='/'>
                            <div className="d-grid gap-2 col-6 ">
                                <button className="btn btn-danger rounded-pill" type="button">
                                    <BiArrowBack />BACK TO HOME PAGE
                                </button>
                            </div>
                        </Link>

                        <div className="newSection">
                            <h1 style={{ 'color': 'white', 'paddingTop': '20px' }}>{`${Detail.original_title}`}</h1>
                            <h4 className="mt-3"><span className="badge rounded-pill bg-light text-dark">{`${Detail.tagline}`}</span></h4>
                            <p className="mt-4" style={{ 'color': 'white', 'fonSize': '19px' }}>{`${Detail.overview}`}</p>
                            <button type="button" className="btn btn-outline-light rounded-pill">
                                <a href={`${Detail.homepage}`} className='text-danger text-decoration-none'>Watch Trailer</a>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default SingleMovie;
