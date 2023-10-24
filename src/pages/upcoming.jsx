
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const Upcoming = () => {
  const [Upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    getComing();
  }, []);

  const getComing = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASEURL}/movie/upcoming?page=2&api_key=${process.env.REACT_APP_APIKEY}`
      );
      const data = response.data.results;
      setUpcoming(data);
    } catch (error) {
      console.log("API NOT CALLED");
    }
  };

  const sortedUpcoming = [...Upcoming].sort((a, b) => new Date(b.release_date) - new Date(a.release_date));

  return (
    <>
      <div className="App">
        <div className="App-header">
          <div className="Movie-container">
            {sortedUpcoming.map((movie, i) => (
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
  );
};

export default Upcoming;