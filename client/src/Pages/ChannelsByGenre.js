import React from 'react';
import { useParams } from 'react-router-dom';
import FullPodcastListByGenre from '../Components/FullPodcastListByGenre';

const ChannelsByGenre = () => {
  const { genre } = useParams();

  return (
    <div>
      <FullPodcastListByGenre genreName={genre}/>
    </div>
  )
};

export default ChannelsByGenre;