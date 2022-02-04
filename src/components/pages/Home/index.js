import './_home.scss'
import { useGetData } from '../../../hooks/useGetData';
import { AnimeSlider } from '../../organism/slider/AnimeSlider';

export const Anime = () => {
    const animeData = useGetData(1)
    const animeData4 = useGetData(4)
    const animeData25 = useGetData(25)
    const animeData7 = useGetData(7)
    const animeData30 = useGetData(30)

  return( 
        <div className='container'>
          {/* Action Anime */}
          <AnimeSlider data={animeData?.anime} title={animeData?.mal_url.name} genreId={1}/>
          {/* Comedy Anime */}
          <AnimeSlider data={animeData4?.anime} title={animeData4?.mal_url.name} genreId={4}/>
          {/* Shojo Anime */}
          <AnimeSlider data={animeData25?.anime} title={animeData25?.mal_url.name} genreId={25}/>
          {/* Mystery Anime */}
          <AnimeSlider data={animeData7?.anime} title={animeData7?.mal_url.name} genreId={7}/> 
          {/* Sports */}
          <AnimeSlider data={animeData30?.anime} title={animeData30?.mal_url.name} genreId={30}/>
        </div>
        );
};
