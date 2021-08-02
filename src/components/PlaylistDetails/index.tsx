import React from 'react';
import { FlatList } from 'react-native';
import { Playlist } from '../../types';
import TrackDetails from '../TrackDetails';

interface Props {
  playlist: Playlist;
}

const PlaylistDetails = ({ playlist }: Props) => {
  return (
    <FlatList
      renderItem={({ item }) => <TrackDetails item={item.track} />}
      data={playlist.tracks.items}
      keyExtractor={item => item.track.id}
    />
  );
};

export default PlaylistDetails;
