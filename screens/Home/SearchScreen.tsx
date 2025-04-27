import {StyleSheet, View} from 'react-native';
import {isDarkMode, AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import {Icons} from '../../utils/AppIcons';
import SearchInputText from '../../components/Home/SearchInputText';
import HomeTransactionsList from '../../components/Home/HomeTransactionsList';
import { TransactionsList } from '../../utils/Constants';

function SearchScreen({navigation}: any): React.JSX.Element {
  return (
    <View style={styles.container}>
      <AppBar
        title="Search"
        icon={Icons.exit}
        imageWidth={10}
        onPress={() => navigation.goBack()}
      />
      <SearchInputText text="Search" rightIcon={true}/>
      <HomeTransactionsList data={TransactionsList}/>
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
