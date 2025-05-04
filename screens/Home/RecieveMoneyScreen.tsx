import {ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import InputField from '../../components/Auth/InputFiled';
import DatePickerWithLabel from '../../components/DatePickerWithLabel';
import SendMoneySection from '../../components/Home/SendMoneySection';
import AppButton from '../../components/AppButton';
import {useTheme} from '../../hooks/darkModeContext';

function RecieveMoneyScreen(): React.JSX.Element {
  const {isDarkMode} = useTheme();
  const {width, height} = useWindowDimensions();
  return (
    <ScrollView style={styles.scroll}>
      <View
        style={[
          styles.scroll,
          {
            paddingHorizontal: width * 0.06,
            paddingTop: height * 0.065,
            backgroundColor: isDarkMode ? AppColors.dark : 'white',
          } as any,
        ]}>
        <AppBar title="Recieve Money" />
        <View style={styles.innerContianer}>
          <InputField
            label="Payer Name"
            leftIcon="user"
            defaultValue="Tanya Myroniuk"
          />
          <InputField
            label="Email Addess "
            leftIcon="email"
            defaultValue="Tanya Myroniuk@gmail.com"
          />
          <InputField
            label="Description"
            leftIcon="user"
            defaultValue="Tanya Myroniuk"
          />
          <DatePickerWithLabel title="Monthly Due By" />
        </View>
        <SendMoneySection />
        <View style={styles.buttonContainer}>
          <AppButton>Recieve Money</AppButton>
        </View>
      </View>
    </ScrollView>
  );
}
export default RecieveMoneyScreen;
const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  innerContianer: {
    marginTop: 31,
    marginBottom: 31,
  },
  buttonContainer: {
    marginBottom: 90,
  },
});
