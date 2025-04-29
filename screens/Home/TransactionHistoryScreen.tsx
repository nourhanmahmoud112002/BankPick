import {StyleSheet, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import SectionTitle from '../../components/SectionTitle';
import HomeTransactionsList from '../../components/Home/HomeTransactionsList';
import {useTheme} from '../../hooks/darkModeContext';
import {useIcons} from '../../utils/AppIcons';
import { useTransactionsHistoryList } from '../../data/appData';

function TransactionHistoryScreen(): React.JSX.Element {
  const {isDarkMode} = useTheme();
  const Icons = useIcons();
  const TransactionsHistoryList = useTransactionsHistoryList();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? AppColors.dark : 'white'} as any,
      ]}>
      <AppBar title="Transaction History" icon={Icons.refresh} />
      <View style={styles.innerConatiner}>
        <SectionTitle title="Today" />
        <HomeTransactionsList data={TransactionsHistoryList} />
      </View>
    </View>
  );
}
export default TransactionHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
  },
  innerConatiner: {
    marginTop: 30,
  },
});
