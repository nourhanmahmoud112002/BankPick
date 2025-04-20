import {StyleSheet,View} from 'react-native';
import { AppColors, isDarkMode } from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import { Icons } from '../../utils/AppIcons';

function StatisticsScreen(): React.JSX.Element {
  return <View style={styles.container}>
    <AppBar title="Statistics" icon={Icons.notification} />
  </View>;
}
export default StatisticsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
    backgroundColor: isDarkMode ? AppColors.dark : 'white',
  },
});
