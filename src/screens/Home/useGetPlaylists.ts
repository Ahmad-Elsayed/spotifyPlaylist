import { useEffect, useState } from 'react';
import { useNetworking } from '../../components/Networking';
import getPlaylist from '../../services/getPlaylists';
import { Playlist } from '../../types';
import { handleApiErrors } from '../../utilities/handleApiErrors';

const playlistsIds = [
  '37i9dQZF1DWXRqgorJj26U',
  '37i9dQZF1DWWGFQLoP9qlv',
  '37i9dQZEVXbKCF6dqVpDkS',
];

export default function useGetPlayLists() {
  const { apiToken } = useNetworking();
  const [playLists, setPlayLists] = useState<Playlist[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchPlayLists() {
      try {
        if (apiToken) {
          const playlistsRequests = playlistsIds.map(id =>
            getPlaylist(apiToken, id),
          );
          const AllPlaylistsData: Playlist[] = await Promise.all(
            playlistsRequests,
          );
          setPlayLists(AllPlaylistsData);
          setLoading(false);
        }
      } catch (err) {
        handleApiErrors(err);
        setLoading(false);
      }
    }
    fetchPlayLists();
  }, [apiToken]);

  return {
    playLists,
    isLoading,
  };
}
