import {StyleSheet, Text} from 'react-native';
import { AppColors, isDarkMode } from '../../utils/AppColors';

function IconLabel({text}: any): React.JSX.Element {
  return <Text style={styles.text}>{text}</Text>;
}
export default IconLabel;
const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color:isDarkMode ? AppColors.lightGray : AppColors.darkerGray,
    marginTop:7,
  },
});
