import "../App.css";
import "../desain.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Detail = () => {
  const [dataf, setDataf] = useState([]);
  const { id } = useParams();
  const math = Math.ceil(dataf.vote_average);

  useEffect(() => {
    getDetail();
  }, [id]);

  const getDetail = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?page=4&api_key=62013f8d2955d920db1bb2fca0d27481`
      );
      const data = response.data;
      setDataf(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="Movie-container">
            <div class="Movie" key={dataf.id}>
              <div class="bg-white rounded-md bg-gray-800 shadow-lg">
                <div class="md:flex px-4 leading-none max-w-4xl">
                  <div class="flex-none ">
                    <img
                      src={`${process.env.REACT_APP_BASEIMG}/${dataf.poster_path}`}
                      alt="pic"
                      class="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
                    />
                  </div>
                  <div class="flex-col text-gray-300">
                    <p class="pt-4 text-2xl font-bold">{dataf.title}</p>
                    <hr class="hr-text" data-content="" />
                    <p class="flex text-md px-4 my-2">
                      {dataf.runtime} min
                      <span class="font-bold px-2">|</span>
                      language: {dataf.original_language}
                    </p>

                    <p class="hidden md:block px-4 my-4 text-sm text-left">
                      {dataf.overview}
                    </p>

                    <p class="flex text-md px-4 my-2">
                      Rating: {math}/10
                      <span class="font-bold px-2">|</span>
                      Release: {dataf.release_date}
                      <span class="font-bold px-2">|</span>
                      Status: {dataf.status}
                    </p>

                    <div class="text-xs">
                      <button
                        type="button"
                        class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                      >
                        TRAILER
                      </button>

                      <a
                        href={`https://www.imdb.com/title/${dataf.imdb_id}`}
                        type="button"
                        class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                      >
                        IMDB
                      </a>

                      <a
                        href={dataf.homepage}
                        type="button"
                        class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                      >
                        HOMEPAGE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
export default Detail;