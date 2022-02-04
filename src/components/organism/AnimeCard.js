import React from 'react';
import { Link } from 'react-router-dom';
import './_animeCard.scss'
export const AnimeCard = ({data, genreId}) => {
   
  return <div className='card'>
            <h2>{data.title}</h2>
            <img src={data.image_url} />
            <Link to={`/${genreId}/${data.mal_id}`}>View more</Link>
        </div>;
};
