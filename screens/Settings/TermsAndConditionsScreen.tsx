import {StyleSheet, Text, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import {TermsAndConditionsText} from '../../utils/Constants';
import {useTheme} from '../../hooks/darkModeContext';

function TermsAndConditionsScreen(): React.JSX.Element {
  const {isDarkMode} = useTheme();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? AppColors.dark : 'white'} as any,
      ]}>
      <AppBar title="Terms & Conditions" />
      <Text
        style={[
          styles.text,
          {color: isDarkMode ? AppColors.gray : 'black'} as any,
        ]}>
        {TermsAndConditionsText}
      </Text>
    </View>
  );
}
export default TermsAndConditionsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',

    lineHeight: 24,
  },
});
