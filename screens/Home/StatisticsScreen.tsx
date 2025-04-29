import {StyleSheet, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import CustomLineChart from '../../components/Statistics/LineChart';
import HomeTransactions from '../../components/Home/HomeTransactions';
import {useTheme} from '../../hooks/darkModeContext';
import {useIcons} from '../../utils/AppIcons';

function StatisticsScreen(): React.JSX.Element {
  const {isDarkMode} = useTheme();
  const Icons = useIcons();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? AppColors.dark : 'white'} as any,
      ]}>
      <AppBar title="Statistics" icon={Icons.notification} />
      <CustomLineChart />
      <HomeTransactions />
    </View>
  );
}
export default StatisticsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
  },
});
