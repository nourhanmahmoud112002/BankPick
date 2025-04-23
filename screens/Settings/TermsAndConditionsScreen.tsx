import {StyleSheet,Text,View} from 'react-native';
import { AppColors, isDarkMode } from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import { TermsAndConditionsText } from '../../utils/Constants';

function TermsAndConditionsScreen(): React.JSX.Element {
  return <View style={styles.container}>
    <AppBar title="Terms & Conditions" />
    <Text style={styles.text}>{TermsAndConditionsText}</Text>
  </View>;
}
export default TermsAndConditionsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
    backgroundColor: isDarkMode ? AppColors.dark : 'white',
  },
  text:{
    fontSize:14,
    fontWeight:'400',
    fontFamily:'Poppins-Regular',
    color:isDarkMode ? AppColors.gray : 'black',
    lineHeight:24,
  },
});
