import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomeTransactionsList from '../Home/HomeTransactionsList';

import MonthySpendingLimit from './MonthlySpendingLimit';
import AppImageBackground from '../AppImageBackground';
import {useTransactionsList} from '../../data/appData';

function CardsContent(): React.JSX.Element {
  const TransactionsList = useTransactionsList();
  return (
    <View>
      <AppImageBackground marginTop={32} />
      <View style={styles.contentContainer}>
        <HomeTransactionsList
          data={TransactionsList.filter(item => item.id !== '3')}
        />
        <MonthySpendingLimit />
      </View>
    </View>
  );
}
export default CardsContent;

const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
  },
});
