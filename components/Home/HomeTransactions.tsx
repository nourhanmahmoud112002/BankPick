import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import HomeTransactionsList from './HomeTransactionsList';
import SectionTitle from '../SectionTitle';
import {useNavigation} from '@react-navigation/native';
import { useTransactionsList } from '../../data/appData';

function HomeTransactions(): React.JSX.Element {
  const navigation = useNavigation();
  const TransactionsList = useTransactionsList();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleconstainer}>
          <SectionTitle title="Transaction" />
          <Text
            style={styles.seeAllText}
            onPress={() => {
              navigation.navigate('TransactionHistory' as never);
            }}>
            See All
          </Text>
        </View>
        <HomeTransactionsList data={TransactionsList} />
      </View>
    </ScrollView>
  );
}

export default HomeTransactions;
const styles = StyleSheet.create({
  container: {
    marginTop: 28,
  },
  titleconstainer: {
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
