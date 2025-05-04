import {StyleSheet, useWindowDimensions, View} from 'react-native';
import HomeAppBar from '../../components/Home/HomeAppBar';
import HomeContent from '../../components/Home/HomeContent';
import {AppColors} from '../../utils/AppColors';
import {useTheme} from '../../hooks/darkModeContext';

function HomeScreen(): React.JSX.Element {
  const {isDarkMode} = useTheme();
  const {width, height} = useWindowDimensions();
  return (
    <View
      style={[
        styles.container,
        {
          paddingHorizontal: width * 0.06,
          paddingTop: height * 0.065,
          backgroundColor: isDarkMode ? AppColors.dark : 'white',
        } as any,
      ]}>
      <HomeAppBar />
      <HomeContent />
    </View>
  );
}
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
