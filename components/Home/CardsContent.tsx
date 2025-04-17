import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import HomeTransactionsList from './HomeTransactionsList';
import {TransactionsList} from '../../utils/Constants';

function CardsContent(): React.JSX.Element {
  return (
    <ImageBackground
      source={require('../../assets/images/Card.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      {/* Overlay UI goes here */}
      <View style={styles.contentContainer}>
        <HomeTransactionsList
          data={TransactionsList.filter(item => item.id !== '3')}
        />
      </View>
    </ImageBackground>
  );
}
export default CardsContent;

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 450,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  contentContainer: {
    width: '100%',
    paddingTop: 180,
  },
});
