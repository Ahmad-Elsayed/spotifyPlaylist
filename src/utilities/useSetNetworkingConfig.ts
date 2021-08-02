import { useEffect } from 'react';
import { useNetworking } from '../components/Networking';
import getSpotifyAccessToken from '../services/getSpotifyAccessToken';
import { handleApiErrors } from './handleApiErrors';

export default function () {
  const { setApiToken } = useNetworking();
  useEffect(() => {
    async function setNetworkToken() {
      try {
        const { access_token } = await getSpotifyAccessToken();
        setApiToken(access_token);
      } catch (error) {
        handleApiErrors(error);
      }
    }

    setNetworkToken();
  }, []);
}
