import {getUpcomingList} from "./api"
import { useEffect, useState } from 'react';
import '../App.css';

const upcoming = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [upComing, setUpComing] = useState([])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        getUpcomingList().then((result) => {
        setUpComing(result)
    })
    }, [])

    const UpComingMovieList = () => {
    return upComing.map((movie, i) => {
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
              <UpComingMovieList/>
          </div>
      </header>
    </div>
    )
}
export default upcoming;