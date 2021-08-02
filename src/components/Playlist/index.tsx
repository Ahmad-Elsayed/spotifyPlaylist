import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Playlist } from '../../types';
import PlaylistDetails from '../PlaylistDetails';
import Text from '../Text';
import styles from './styles';

interface Props {
  item: Playlist;
  setActive: () => void;
  isActive: boolean;
}

const PlaylistItem = ({ item, setActive, isActive }: Props) => {
  const numberOfTracks = item.tracks.items.length;

  return (
    <>
      <TouchableOpacity activeOpacity={0.9} onPress={setActive}>
        <Image source={{ uri: item.images[0].url }} style={styles.imageStyle} />
        {!!numberOfTracks && (
          <Text style={styles.numberOfTracksStyle}>
            {`Number Of Tracks: ${numberOfTracks.toString()}`}
          </Text>
        )}
        <Text style={styles.titleStyle}>{item.name}</Text>
      </TouchableOpacity>
      {isActive && <PlaylistDetails playlist={item} />}
    </>
  );
};

export default PlaylistItem;
