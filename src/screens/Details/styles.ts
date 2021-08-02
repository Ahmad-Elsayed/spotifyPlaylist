import { StyleSheet } from 'react-native';
import { scale, verticalScale } from '../../utilities/Scaling';

export default StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  imageStyle: {
    flex: 1,
    width: scale(300),
    aspectRatio: 1,
    marginHorizontal: scale(40),
  },
  detailsContainerStyle: {
    borderRadius: scale(10),
    marginHorizontal: scale(8),
    marginTop: verticalScale(15),
  },
  itemContainerStyle: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(20),
    alignItems: 'center',
  },
  titleStyle: {
    fontWeight: '600',
    flex: 1,
  },
  valueStyle: {
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'right'
  },
});
