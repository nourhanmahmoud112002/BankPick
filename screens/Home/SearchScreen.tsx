import {StyleSheet, View} from 'react-native';
import {isDarkMode, AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import {Icons} from '../../utils/AppIcons';

function SearchScreen({navigation}: any): React.JSX.Element {
  return (
    <View style={styles.container}>
      <AppBar
        title="Search"
        icon={Icons.add}
        onPress={() => navigation.navigate('AddNewCard')}
      />
    </View>
  );
}
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
    backgroundColor: isDarkMode ? AppColors.dark : 'white',
  },
});
