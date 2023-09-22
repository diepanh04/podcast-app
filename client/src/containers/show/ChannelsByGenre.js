import React from 'react';
import { useParams } from 'react-router-dom';
import FullChannelListByGenre from '../../components/genres/FullChannelListByGenre';
import ListNavigator from '../../components/shared/ListNavigator';

const ChannelsByGenre = () => {
  const { genre } = useParams();

  return (
    <div style={{ padding: '50px' }}>
      <ListNavigator current={genre} previous={['dashboard', 'genres']}/>
      <FullChannelListByGenre genreName={genre}/>
    </div>
  )
};

export default ChannelsByGenre;