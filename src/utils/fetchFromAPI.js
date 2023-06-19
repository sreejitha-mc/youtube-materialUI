import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
console.log('api',process.env.REACT_APP_RAPID_API_KEY)

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'f70c14f1b6msh078dfe4d8bef996p18cf63jsn5224ca465836',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};