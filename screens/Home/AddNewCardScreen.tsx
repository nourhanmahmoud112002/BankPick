import {StyleSheet, View} from 'react-native';
import {isDarkMode, AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import AddNewCardContent from '../../components/MyCards/AddNewCardContent';

function AddNewCardScreen(): React.JSX.Element {
  return <View style={styles.container}>
    <AppBar title="Add New Card"/>
    <AddNewCardContent/>
  </View>;
}
export default AddNewCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
    backgroundColor: isDarkMode ? AppColors.dark : 'white',
  },
});
