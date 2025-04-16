import {StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from '../Icon';
import {Icons} from '../../utils/AppIcons';
import IconLabel from './IconLabel';

function HomeCategorizeIcons(): React.JSX.Element {
  return (
    <View style={[styles.container]}>
      <View style={styles.innerContainer}>
        <Icon width={54} icon={Icons.arrowUp} />
        <IconLabel text="Sent" />
      </View>

      <View style={styles.innerContainer}>
        <Icon width={54} icon={Icons.arrowDown} />
        <IconLabel text="Receive" />
      </View>
      <View style={styles.innerContainer}>
        <Icon width={54} icon={Icons.loan} />
        <IconLabel text="Loan" />
      </View>
      <View style={styles.innerContainer}>
        <Icon width={54} icon={Icons.topUp} />
        <IconLabel text="TopUp" />
      </View>
    </View>
  );
}

export default HomeCategorizeIcons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 62,
    justifyContent: 'space-between', // OR 'space-evenly'
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
  },
});
