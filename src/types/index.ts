import { Themes } from '../components/Theming/Themes';

export type MainStackRoute = {
  home: undefined;
  artistDetails: { artistDetailsUrl: string };
};

export type ThemeColors = {
  primary: string;
  background: string;
  card: string;
  border: string;
  secondary: string;
};

export type ThemeContext = {
  colors: ThemeColors;
  changeColorTheme: () => void;
};
export type NetworkContext = {
  apiToken: string;
  setApiToken: (token: string) => void;
};

export type httpOptions = {
  url: string;
  method: 'get' | 'post';
  token: string;
  body?: BodyInit_ | undefined;
};

export type Image = { url: string };

export type Playlist = {
  description: string;
  followers: { total: number };
  images: Image[];
  name: string;
  id: string;
  tracks: {
    href: string;
    items: [
      {
        track: Track;
      },
    ];
    limit: number;
    next: string;
    offset: number;
    total: number;
  };
};

export type Artist = {
  href: string;
  id: string;
  name: string;
  type: string;
  followers: { total: number };
  genres: string[];
  images: Image[];
  popularity: number;
};

export type Album = {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  total_tracks: number;
  type: 'album';
};

export type Track = {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  id: string;
  name: string;
  popularity: number;
  track_number: number;
  type: string;
};
