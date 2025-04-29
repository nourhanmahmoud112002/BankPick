import {StyleSheet, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import SearchInputText from '../../components/Home/SearchInputText';
import HomeTransactionsList from '../../components/Home/HomeTransactionsList';

import {useTheme} from '../../hooks/darkModeContext';
import {useIcons} from '../../utils/AppIcons';
import { useTransactionsList } from '../../data/appData';

function SearchScreen({navigation}: any): React.JSX.Element {
  const {isDarkMode} = useTheme();
  const Icons = useIcons();
  const TransactionsList = useTransactionsList();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? AppColors.dark : 'white'} as any,
      ]}>
      <AppBar
        title="Search"
        icon={Icons.exit}
        imageWidth={10}
        onPress={() => navigation.goBack()}
      />
      <SearchInputText text="Search" rightIcon={true} />
      <HomeTransactionsList data={TransactionsList} />
    </View>
  );
}
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
  },
});
