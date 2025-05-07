import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import SectionTitle from '../../components/SectionTitle';
import HomeTransactionsList from '../../components/Home/HomeTransactionsList';
import {useTheme} from '../../hooks/darkModeContext';
import {useIcons} from '../../utils/AppIcons';
import {useTransactionsHistoryList} from '../../data/appData';
import EmptyTransaction from '../../components/Home/EmptyTransaction';

function TransactionHistoryScreen(): React.JSX.Element {
  const {isDarkMode} = useTheme();
  const Icons = useIcons();
  const TransactionsHistoryList = useTransactionsHistoryList();
  const {width, height} = useWindowDimensions();
  return (
    <View
      style={[
        styles.container,
        {
          paddingHorizontal: width * 0.06,
          paddingTop: height * 0.065,
          backgroundColor: isDarkMode ? AppColors.dark : 'white',
        } as any,
      ]}>
      <AppBar title="Transaction History" icon={Icons.refresh} />
      <View style={styles.innerConatiner}>
        {TransactionsHistoryList.length === 0 && <EmptyTransaction />}
        {TransactionsHistoryList.length > 0 && (
          <>
            <SectionTitle title="Today" />
            <HomeTransactionsList data={TransactionsHistoryList} />
          </>
        )}
      </View>
    </View>
  );
}
export default TransactionHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerConatiner: {
    marginTop: 30,
  },
});
