import {StyleSheet, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import AppImageBackground from '../../components/AppImageBackground';
import SendToSection from '../../components/Home/SendToSection';
import AppButton from '../../components/AppButton';
import SendMoneySection from '../../components/Home/SendMoneySection';
import {useTheme} from '../../hooks/darkModeContext';

function SendMoneyScreen(): React.JSX.Element {
  const {isDarkMode} = useTheme();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? AppColors.dark : 'white'} as any,
      ]}>
      <AppBar title="Send Money" />
      <AppImageBackground marginTop={32}>
        <SendToSection />
        <SendMoneySection />
        <AppButton>Send Money</AppButton>
      </AppImageBackground>
    </View>
  );
}
export default SendMoneyScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
  },
});
