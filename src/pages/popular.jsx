import {getPopularList} from "../api/api"
import { useEffect, useState } from 'react';
import '../App.css';

const popular = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [popularMovie, setPopular] = useState([])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        getPopularList().then((result) => {
        setPopular(result)
        })
    }, [])

    const PopularMovieList = () => {
        return popularMovie.map((movie, i) => {
        return(
            <div className="Movie-wrapper" key={i}>
                <div className="Movie-title">{movie.title}</div>
                <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMG}/${movie.poster_path}`}/>
                <div className="Movie-date">Release : {movie.release_date}</div>
                </div>
        )
        })
    }

    return(
    <div className="App">
    <header className="App-header">
        <div className="Movie-container">
            <PopularMovieList/>
        </div>
    </header>
    </div>
    )
}
export default popular;