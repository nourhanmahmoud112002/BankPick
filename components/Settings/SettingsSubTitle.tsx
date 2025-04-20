import {StyleSheet, Text} from 'react-native';
import {AppColors} from '../../utils/AppColors';

function SettingsSubTitle({title}: any): React.JSX.Element {
  return <Text style={styles.text}>{title}</Text>;
}
export default SettingsSubTitle;

const styles = StyleSheet.create({
  text: {
    marginTop: 31,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: AppColors.lightGray,
  },
});
