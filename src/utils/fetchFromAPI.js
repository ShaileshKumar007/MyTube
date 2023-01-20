import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'd3b626ae96msh1e0ef5c3bf27402p1cb28ejsn9ee9b54819db',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  }