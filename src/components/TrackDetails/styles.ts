import { StyleSheet } from 'react-native';
import { scale, verticalScale } from '../../utilities/Scaling';

export default StyleSheet.create({
  containerStyle: {
    padding: scale(16),
    margin: scale(5),
    borderWidth: 1,
    borderRadius: scale(6),
  },
  titleStyle: {
    fontWeight: '600',
    marginBottom: verticalScale(10),
  },
  detailsTextStyle: {
    fontStyle: 'italic',
    fontSize: scale(12),
    marginTop: verticalScale(8),
  },
  artistsContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(8),
    flexWrap: 'wrap',
  },
  artistStyle: {
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(3),
    borderRadius: scale(5),
    marginHorizontal: scale(6),
    marginTop: verticalScale(8),
  },
  artistTextStyle: {
    fontWeight: '500',
    textDecorationLine: 'underline',
    textDecorationColor: '#2D3047',
  },
});
