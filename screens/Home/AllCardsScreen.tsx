import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import AppImageBackground from '../../components/AppImageBackground';

import AppButton from '../../components/AppButton';
import {useTheme} from '../../hooks/darkModeContext';
import AppOverlayBackImage from '../../components/AppOverlayBackImage';
function AllCardsScreen({navigation}: any): React.JSX.Element {
  const {isDarkMode} = useTheme();
  const {width, height} = useWindowDimensions();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: height * 0.065,
          backgroundColor: isDarkMode ? AppColors.dark : 'white',
        } as any,
      ]}>
      <AppBar title="All Cards" paddingHorizontal={width * 0.06} />
      <AppImageBackground marginTop={32} />
      <AppOverlayBackImage marginTop={100} />
      <View style={{marginTop: height * 0.06, paddingHorizontal: width * 0.06}}>
        <AppButton onPress={() => navigation.navigate('AddNewCard')}>
          Add New Card +
        </AppButton>
      </View>
    </View>
  );
}
export default AllCardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
