import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getMovieList = async() => {
   const movie = await axios.get(`${baseUrl}/movie/now_playing?page=2&api_key=${apiKey}`)
   return movie.data.results
}

export const getHome = async() => {
   const home = await axios.get(`${baseUrl}/movie/now_playing?page=4&api_key=${apiKey}`)
   return home.data.results
}

export const getPopularList = async() => {
   const popular = await axios.get(`${baseUrl}/movie/popular?page=2&api_key=${apiKey}`)
   return popular.data.results
}

export const getTopList = async() => {
   const top = await axios.get(`${baseUrl}/movie/top_rated?page=1&api_key=${apiKey}`)
   return top.data.results
}

export const getUpcomingList = async() => {
   const upcoming = await axios.get(`${baseUrl}/movie/upcoming?page=2&api_key=${apiKey}`)
   return upcoming.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`)
    return search.data
}