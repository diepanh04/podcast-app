import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import EpisodeList from '../../components/channels/EpisodeList';
import ListNavigator from '../../components/shared/ListNavigator';

const EpisodesByChannel = () => {
  const { channel } = useParams();

  return (
    <div style={{ padding: '50px' }}>
      <ListNavigator current={channel} previous={['dashboard']}/>
      <EpisodeList channelName={channel}/>
    </div>
  )
}

EpisodesByChannel.propTypes = {
  channel: PropTypes.string.isRequired,
};

export default EpisodesByChannel;