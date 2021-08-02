import { httpCall } from './utils';

function getSpotifyAccessToken() {
  return httpCall({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    body: 'grant_type=client_credentials',
    token:
      'Basic M2YwODRlYjk4Njc1NDdjNDk3MTExN2E4NjY0ZTI3N2Q6Y2NhOGQ0NTc4YTZmNGE0YmJmMmExN2MzMmJjYTNmNzk=',
  });
}

export default getSpotifyAccessToken;
