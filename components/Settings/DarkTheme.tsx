import {StyleSheet, Switch, View} from 'react-native';
import {Text} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import {useTheme} from '../../hooks/darkModeContext';

function DarkTheme(): React.JSX.Element {
  const {isDarkMode, toggleTheme} = useTheme();

  return (
    <View style={styles.container}>
      <Text
        style={[styles.text, {color: isDarkMode ? 'white' : 'black'} as any]}>
        Dark Theme
      </Text>
      <Switch
        trackColor={{false: AppColors.lightGray, true: AppColors.primaryColor}}
        thumbColor={'white'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleTheme}
        value={isDarkMode}
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
  },
});
