import {StyleSheet, Text} from 'react-native';
import {isDarkMode} from '../utils/AppColors';

function SectionTitle({title}: any): React.JSX.Element {
  return <Text style={styles.text}>{title}</Text>;
}
export default SectionTitle;
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: isDarkMode ? 'white' : 'black',
  },
});
