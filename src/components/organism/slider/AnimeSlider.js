import React from 'react';
import Slider from 'react-slick';
import { AnimeCard } from '../AnimeCard';
import './_animeSlider.scss'
export const AnimeSlider = ({data, title, genreId}) => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return(
      <>
      <h2 className='slider__h2'>{title}</h2>
    <Slider className='container__slider' {...settings}>
        {data && data.map(anime =>            
        <AnimeCard key={anime.title} data={anime} genreId={genreId}/>           
        )}
    </Slider>
</>);
};
