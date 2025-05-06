import React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import HomeTransactionsList from '../Home/HomeTransactionsList';

import MonthySpendingLimit from './MonthlySpendingLimit';
import AppImageBackground from '../AppImageBackground';
import {useTransactionsList} from '../../data/appData';
import AppOverlayBackImage from '../AppOverlayBackImage';

function CardsContent(): React.JSX.Element {
  const TransactionsList = useTransactionsList();
  const {width} = useWindowDimensions();
  return (
    <View>
      <AppImageBackground marginTop={32} />
      <AppOverlayBackImage marginTop={30}/>
      <View style={[styles.contentContainer, {paddingHorizontal: width * 0.06}]}>
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
