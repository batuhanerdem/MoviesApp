import React from "react";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/";
const API_KEY = "829731b57ee6c31bf740be8b6dc3083e";


export const getTopRatedMovies = async () => {
    const url = `${BASE_URL}3/movie/top_rated?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data.results;
};
export const getPopularMovies = async () => {
    const url = `${BASE_URL}3/movie/popular?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data.results;
};

export const getPopularTv = async () => {
    const url = `${BASE_URL}3/tv/popular?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data.results;
}

export const getTopRatedTv = async () => {
    const url = `${BASE_URL}3/tv/top_rated?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data.results;
}

export const getMovieDetails = async (id) => {
    const url = `${BASE_URL}3/movie/${id}?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
}
export const getTvDetails = async (id) => {
    const url = `${BASE_URL}3/tv/${id}?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
}

