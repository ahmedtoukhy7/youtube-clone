import { createContext, useState } from "react";
import { getData } from "./utils/Api";
import axios from "axios";


export let videoContext=createContext()

export function VideoContextProvider({children}){
    let [video,setVideo]=useState([])
    let [active,setActive]=useState('New')
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

   async function searchData (name){
        let {data}= await axios.get(`https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${name}`,options)
        //console.log(data)
        return data
        
       
    }
   

    return <>

    <videoContext.Provider value={{setVideo,video , active , setActive , searchData  }}>
        {children}
    </videoContext.Provider>
    
    </>
}
