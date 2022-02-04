import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetData } from '../../../hooks/useGetData';
import './_anime.scss'
export const AnimeName = () => {
    
    const { genreId, animeId} = useParams()
    const animeData = useGetData(genreId)
    const anime = animeData?.anime.filter(anime => anime.mal_id==animeId)
    
    
  return( 
  <>
  {anime && 
    <div className='animecontainer'>
        <h1>{anime[0].title}</h1>
        <img src={anime[0].image_url}></img>
        <p className='animecontainer__synopsis'>{anime[0].synopsis}</p>
        <p><b>Episodes: </b>{anime[0].episodes}</p>
        <p><b>Rating: </b>{anime[0].score} / 10</p>
        <ul>
                {anime[0].genres.map( genre => <li key={genre.name}>{genre.name}</li>)}
        </ul>
        <Link to='/'> ⬅ Return</Link>
    </div>
  }
  </>);
}

