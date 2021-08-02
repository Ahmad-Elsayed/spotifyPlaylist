import { Playlist } from '../types';
import { httpCall } from './utils';

function getPlaylist(apiToken: string, playlistId: string): Promise<Playlist> {
  const url = `https://api.spotify.com/v1/playlists/${playlistId}`;
  const token = `Bearer ${apiToken}`;

  return httpCall({ url, token, method: 'get' });
}

export default getPlaylist;
