import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { useTheming } from '../../components/Theming';
import useGetArtistDetails from './useGetArtistDetails';
import styles from './styles';
import Loading from '../../components/Loading';
import Text from '../../components/Text';

const Details = () => {
  const { artistDetails, isLoading } = useGetArtistDetails();
  const { colors } = useTheming();

  const artistDetailsData = [
    {
      title: 'Number Of Followers',
      value: artistDetails?.followers.total.toString(),
    },
    { title: 'Genres', value: artistDetails?.genres.join(' , ') },
    { title: 'Popularity', value: artistDetails?.popularity.toString() },
    { title: 'Type', value: artistDetails?.type },
  ];

  return (
    <ScrollView
      style={StyleSheet.flatten([
        { backgroundColor: colors.background },
        styles.containerStyle,
      ])}>
      {isLoading ? (
        <Loading />
      ) : (
        !!artistDetails && (
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {artistDetails.images.map(artistImage => (
                <Image
                  key={artistImage.url}
                  source={{ uri: artistImage.url }}
                  style={styles.imageStyle}
                />
              ))}
            </ScrollView>
            <View
              style={StyleSheet.flatten([
                { backgroundColor: colors.card, borderColor: colors.border },
                styles.detailsContainerStyle,
              ])}>
              {artistDetailsData.map(({ title, value }) => (
                <View
                  key={title}
                  style={StyleSheet.flatten([
                    styles.itemContainerStyle,
                    { borderColor: colors.border },
                  ])}>
                  <Text style={styles.titleStyle}>{title}</Text>
                  <Text style={styles.valueStyle}>{value || ''}</Text>
                </View>
              ))}
            </View>
          </View>
        )
      )}
    </ScrollView>
  );
};

export default Details;
