import {ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import AppImageBackground from '../../components/AppImageBackground';
import SendToSection from '../../components/Home/SendToSection';
import AppButton from '../../components/AppButton';
import SendMoneySection from '../../components/Home/SendMoneySection';
import {useTheme} from '../../hooks/darkModeContext';

function SendMoneyScreen(): React.JSX.Element {
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
        <AppBar title="Send Money" />
        <AppImageBackground marginTop={32} />
        <SendToSection />
        <SendMoneySection />
        <AppButton>Send Money</AppButton>
      </View>
    </ScrollView>
  );
}
export default SendMoneyScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
