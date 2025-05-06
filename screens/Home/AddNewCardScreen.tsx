import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import AddNewCardContent from '../../components/MyCards/AddNewCardContent';
import {useTheme} from '../../hooks/darkModeContext';

function AddNewCardScreen(): React.JSX.Element {
  const {isDarkMode} = useTheme();
  const {width, height} = useWindowDimensions();
  return (
    <View
      style={[
        styles.container,
        {
          // paddingHorizontal: width * 0.06,
          paddingTop: height * 0.065,
          backgroundColor: isDarkMode ? AppColors.dark : 'white',
        } as any,
      ]}>
      <AppBar title="Add New Card" paddingHorizontal={width * 0.06} />
      <AddNewCardContent />
    </View>
  );
}
export default AddNewCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 25,
    // paddingTop: 54,
  },
});
