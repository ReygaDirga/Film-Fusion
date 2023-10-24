import '../App.css';
import {useEffect, useState} from "react"
import axios from 'axios';

const Toprated = () => {

    const [topRated, setTopRated] = useState([])
    
    useEffect(()=>{
        getTop();
    }, [])

    const getTop = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_BASEURL}/movie/top_rated?page=1&api_key=${process.env.REACT_APP_APIKEY}`
          );
          const data = response.data.results;
          setTopRated(data);
        } catch (error) {
          console.log("API NOT CALLED");
        }
      };

    return(
<>
      <div className="App">
        <div className="App-header">
          <div className="Movie-container">
            {topRated.map((movie, i) => (
              <div className="Movie-wrapper" key={i}>
                <div className="Movie-title">{movie.title}</div>
                <img
                  className="Movie-image"
                  src={`${process.env.REACT_APP_BASEIMG}/${movie.poster_path}`}
                  alt=" "
                />
                <div className="Movie-date">Release : {movie.release_date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
    )
}
export default Toprated;




// const toprated = () => {

//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [topRated, setTopRated] = useState([])

//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     useEffect(() => {
//         getTopList().then((result) => {
//         setTopRated(result)
//         })
//     }, [])

//     const TopRatedMovieList = () => {
//         return topRated.map((movie, i) => {
//         return(
//             <div className="Movie-wrapper" key={i}>
//                 <div className="Movie-title">{movie.title}</div>
//                 <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMG}/${movie.poster_path}`} alt=""/>
//                 <div className="Movie-date">Release : {movie.release_date}</div>
//                 </div>
//         )
//         })
//     }

//     return(
//     <div className="App">
//       <header className="App-header">
//           <div className="Movie-container">
//               <TopRatedMovieList/>
//           </div>
//       </header>
//     </div>
//     )
// }
// export default toprated;