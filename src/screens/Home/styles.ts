import { StyleSheet } from 'react-native';
import { verticalScale } from '../../utilities/Scaling';

export default StyleSheet.create({
  contentContainerStyle: {
    flex: 0,
    flexGrow: 1,
  },
  separatorStyle: {
    height: verticalScale(17),
  },
});
