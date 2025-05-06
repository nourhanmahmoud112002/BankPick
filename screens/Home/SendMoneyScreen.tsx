import {ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import AppImageBackground from '../../components/AppImageBackground';
import SendToSection from '../../components/Home/SendToSection';
import AppButton from '../../components/AppButton';
import SendMoneySection from '../../components/Home/SendMoneySection';
import {useTheme} from '../../hooks/darkModeContext';
import AppOverlayBackImage from '../../components/AppOverlayBackImage';

function SendMoneyScreen(): React.JSX.Element {
  const {isDarkMode} = useTheme();
  const {width, height} = useWindowDimensions();
  return (
    <ScrollView
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? AppColors.dark : 'white'} as any,
      ]}>
      <View
        style={[
          styles.container,
          {
            // paddingHorizontal: width * 0.06,
            paddingTop: height * 0.065,
          } as any,
        ]}>
        <AppBar title="Send Money" paddingHorizontal={width * 0.06} />
        <AppImageBackground marginTop={32} />
        <AppOverlayBackImage marginTop={100} />
        <View style={{paddingHorizontal: width * 0.06}}>
          <SendToSection />
          <SendMoneySection />
          <AppButton>Send Money</AppButton>
        </View>
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
