import {StyleSheet, Text} from 'react-native';
import {isDarkMode} from '../../utils/AppColors';

function AuthTitle({children}: any): React.JSX.Element {
  return <Text style={styles.text}>{children}</Text>;
}
export default AuthTitle;
const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: isDarkMode ? 'white' : 'black',
    marginBottom:38,
    marginTop:53,
  },
});
