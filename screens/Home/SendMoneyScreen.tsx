import {StyleSheet,View} from 'react-native';
import { AppColors, isDarkMode } from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import AppImageBackground from '../../components/AppImageBackground';

function SendMoneyScreen(): React.JSX.Element {
  return <View style={styles.container}>
    <AppBar title="Send Money" />
    <AppImageBackground marginTop={32}/>
  </View>;
}
export default SendMoneyScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
    backgroundColor: isDarkMode ? AppColors.dark : 'white',
  },
});
