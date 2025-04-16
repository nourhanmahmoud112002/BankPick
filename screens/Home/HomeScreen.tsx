import {StyleSheet, View} from 'react-native';
import HomeAppBar from '../../components/Home/HomeAppBar';
import HomeContent from '../../components/Home/HomeContent';
import {AppColors, isDarkMode} from '../../utils/AppColors';

function HomeScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <HomeAppBar />
      <HomeContent />
    </View>
  );
}
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
    backgroundColor: isDarkMode ? AppColors.dark : 'white',
  },
});
