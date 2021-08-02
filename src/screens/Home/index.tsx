import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import EmptyList from '../../components/EmptyList';
import Playlist from '../../components/Playlist';
import { useTheming } from '../../components/Theming';
import styles from './styles';
import useGetPlayLists from './useGetPlaylists';

const Home = () => {
  const { colors } = useTheming();
  const { isLoading, playLists } = useGetPlayLists();
  const [activePlaylist, setActivePlaylist] = useState('');

  function handleSetActivePlaylist(playListId: string) {
    if (activePlaylist === playListId) {
      setActivePlaylist('');
    } else {
      setActivePlaylist(playListId);
    }
  }

  return (
    <FlatList
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.contentContainerStyle}
      keyExtractor={item => item.id}
      ListEmptyComponent={() => <EmptyList loading={isLoading} />}
      ItemSeparatorComponent={() => <View style={styles.separatorStyle} />}
      renderItem={({ item }) => (
        <Playlist
          item={item}
          isActive={activePlaylist === item.id}
          setActive={() => handleSetActivePlaylist(item.id)}
        />
      )}
      data={playLists}
    />
  );
};

export default Home;
