import React from 'react';
import { StyleSheet, View } from 'react-native';
import Loading from '../Loading';
import Text from '../Text';

interface Props {
  loading?: boolean;
}

const EmptyList = ({ loading }: Props) => {
  return (
    <View style={styles.containerStyle}>
      {loading ? (
        <Loading />
      ) : (
        <Text style={styles.textStyle}>No Results Found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 16,
  },
});

export default EmptyList;
