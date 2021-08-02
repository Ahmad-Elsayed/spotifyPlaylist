import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useNetworking } from '../../components/Networking';
import getArtistDetails from '../../services/getArtistDetails';
import { Artist, MainStackRoute } from '../../types';

type ArtistScreenRouteProp = RouteProp<MainStackRoute, 'artistDetails'>;

export default function () {
  const { params } = useRoute<ArtistScreenRouteProp>();
  const { apiToken } = useNetworking();
  const { setOptions } = useNavigation();
  const [artistDetails, setArtistDetails] = useState<Artist | null>(null);

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    async function getArtistDetailsHandler() {
      const artist = await getArtistDetails(apiToken, params.artistDetailsUrl);
      setOptions({ title: artist.name });
      setLoading(false);
      setArtistDetails(artist);
    }
    getArtistDetailsHandler();
  }, []);

  return {
    isLoading,
    artistDetails,
  };
}
