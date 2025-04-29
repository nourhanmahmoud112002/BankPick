import {StyleSheet, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import AppImageBackground from '../../components/AppImageBackground';

import AppButton from '../../components/AppButton';
import {useTheme} from '../../hooks/darkModeContext';
import { useIcons } from '../../utils/AppIcons';

function AllCardsScreen({navigation}: any): React.JSX.Element {
  const {isDarkMode} = useTheme();
   const Icons = useIcons();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? AppColors.dark : 'white'} as any,
      ]}>
      <AppBar title="All Cards" />
      <AppImageBackground marginTop={32} image={Icons.allCards} />
      <View style={styles.buttonContainer}>
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
    paddingHorizontal: 25,
    paddingTop: 54,
  },
  buttonContainer: {
    marginTop: 50,
  },
});
