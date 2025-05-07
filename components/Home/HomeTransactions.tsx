import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import HomeTransactionsList from './HomeTransactionsList';
import SectionTitle from '../SectionTitle';
import {useNavigation} from '@react-navigation/native';
import {useTransactionsList} from '../../data/appData';
import EmptyTransaction from './EmptyTransaction';

function HomeTransactions(): React.JSX.Element {
  const navigation = useNavigation();
  const TransactionsList = useTransactionsList();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.titleContainer}>
        <SectionTitle title="Transaction" />
        <Text
          style={styles.seeAllText}
          onPress={() => {
            navigation.navigate('TransactionHistory' as never);
          }}>
          See All
        </Text>
      </View>
      {TransactionsList.length === 0 && <EmptyTransaction />}
      {TransactionsList.length > 0 && (
        <HomeTransactionsList data={TransactionsList} />
      )}
    </ScrollView>
  );
}

export default HomeTransactions;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 20,
    marginTop: 28,
  },
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: AppColors.primaryColor,
  },
});
