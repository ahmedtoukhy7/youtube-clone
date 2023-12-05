import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = { 
    params: {
      
      maxResults: '50',
      
    },
    headers: {
      'X-RapidAPI-Key': '2014cf4d0amsh89b8d1244a6e31dp1cd51djsnb4ec7392f3f3',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export async function getData(url){
   
let {data}= await axios.get(`${BASE_URL}/${url}`,options)
//console.log(data)
return data

}