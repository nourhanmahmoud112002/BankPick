import {StyleSheet, View} from 'react-native';
import {isDarkMode, AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import AppImageBackground from '../../components/AppImageBackground';
import {Icons} from '../../utils/AppIcons';
import AppButton from '../../components/AppButton';

function AllCardsScreen({navigation}: any): React.JSX.Element {
  return (
    <View style={styles.container}>
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
    backgroundColor: isDarkMode ? AppColors.dark : 'white',
  },
  buttonContainer: {
    marginTop: 50,
  },
});
