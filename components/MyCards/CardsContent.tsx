import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomeTransactionsList from '../Home/HomeTransactionsList';
import {TransactionsList} from '../../utils/Constants';
import MonthySpendingLimit from './MonthlySpendingLimit';
import AppImageBackground from '../AppImageBackground';

function CardsContent(): React.JSX.Element {
  return (
    <AppImageBackground  marginTop={32}>
      <View style={styles.contentContainer}>
        <HomeTransactionsList
          data={TransactionsList.filter(item => item.id !== '3')}
        />
        <MonthySpendingLimit />
      </View>
    </AppImageBackground>
  );
}
export default CardsContent;

const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
    paddingTop: 320,
  },
});
