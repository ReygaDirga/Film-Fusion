import "../App.css"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const Detail = () => {

  const MovieDetail = () => {
    const { movieId } = useParams();
  
    useEffect(() => {
      console.log(`Halaman Detail dengan ID: ${movieId}`);
    }, [movieId]);

  }

    return (
    <div className="App">
        <header className="App-header">
          <div className="Movie-container">

          <a href="/" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">HALAMAN DETAIL</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>

          </div>
        </header>
      </div>

    )
}
export default Detail