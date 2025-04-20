import {StyleSheet, Switch, View} from 'react-native';
import {Text} from 'react-native';
import {AppColors, isDarkMode} from '../../utils/AppColors';
// import { useState } from 'react';
import useMode from '../../hooks/useMode';

function DarkTheme(): React.JSX.Element {
  const {isEnabled, toggleSwitch} = useMode();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dark Theme</Text>
      <Switch
        trackColor={{false: AppColors.lightGray, true: AppColors.primaryColor}}
        thumbColor={'white'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}
export default DarkTheme;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: isDarkMode ? 'white' : 'black',
  },
});
