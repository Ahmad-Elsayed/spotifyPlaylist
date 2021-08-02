import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Track } from '../../types';
import Text from '../Text';
import { useTheming } from '../Theming';
import styles from './styles';

interface Props {
  item: Track;
}

const TrackDetails = ({ item }: Props) => {
  const { colors } = useTheming();
  const { navigate } = useNavigation();

  return (
    <View
      style={StyleSheet.flatten([
        styles.containerStyle,
        { borderColor: colors.border, backgroundColor: colors.card },
      ])}>
      <Text style={styles.titleStyle}>{item.name}</Text>
      <Text
        style={styles.detailsTextStyle}>{`Duration: ${item.duration_ms}`}</Text>
      <Text
        style={
          styles.detailsTextStyle
        }>{`Popularity: ${item.popularity}`}</Text>
      <Text style={styles.detailsTextStyle}>{`Album: ${item.album.name}`}</Text>
      <View style={styles.artistsContainerStyle}>
        <Text style={styles.detailsTextStyle}>Artists:</Text>
        {item.artists.map(artist => (
          <TouchableOpacity
            key={artist.id}
            onPress={() => {
              navigate('artistDetails', {
                artistDetailsUrl: artist.href,
              });
            }}
            style={StyleSheet.flatten([
              styles.artistStyle,
              { backgroundColor: colors.border },
            ])}>
            <Text style={styles.artistTextStyle}>{artist.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TrackDetails;
