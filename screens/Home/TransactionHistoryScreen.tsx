import {StyleSheet, View} from 'react-native';
import {isDarkMode, AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import SectionTitle from '../../components/SectionTitle';
import HomeTransactionsList from '../../components/Home/HomeTransactionsList';
import {TransactionsHistoryList} from '../../utils/Constants';
import { Icons } from '../../utils/AppIcons';

function TransactionHistoryScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
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
    backgroundColor: isDarkMode ? AppColors.dark : 'white',
  },
  innerConatiner: {
    marginTop: 30,
  },
});
