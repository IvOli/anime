import { useEffect, useState } from "react"

export const useGetData = (genre)=>{
  const url = `https://jikan1.p.rapidapi.com/genre/anime/${genre}/1`
  const [data, setData] = useState(null);
  
  useEffect(() =>{
    fetch(url, {
      headers: {
          'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
        }
  })
      .then(response => response.json())
      .then(data =>{
         setData(data)
      })
  }
      , [genre]);
    
  return data
}





    