import {ScrollView, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import {TermsAndConditionsText} from '../../utils/Constants';
import {useTheme} from '../../hooks/darkModeContext';

function TermsAndConditionsScreen(): React.JSX.Element {
  const {isDarkMode} = useTheme();
  const {width, height} = useWindowDimensions();
  return (
   <ScrollView style={styles.container}>
     <View
      style={[
        styles.container,
        {
          paddingHorizontal: width * 0.06,
          paddingTop: height * 0.065,
          backgroundColor: isDarkMode ? AppColors.dark : 'white',
        } as any,
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
   </ScrollView>
  );
}
export default TermsAndConditionsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',

    lineHeight: 24,
  },
});
