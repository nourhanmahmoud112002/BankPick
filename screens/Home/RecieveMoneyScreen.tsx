import {ScrollView, StyleSheet, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import InputField from '../../components/Auth/InputFiled';
import DatePickerWithLabel from '../../components/DatePickerWithLabel';
import SendMoneySection from '../../components/Home/SendMoneySection';
import AppButton from '../../components/AppButton';
import {useTheme} from '../../hooks/darkModeContext';

function RecieveMoneyScreen(): React.JSX.Element {
  const {isDarkMode} = useTheme();
  return (
    <ScrollView style={styles.scroll}>
      <View
        style={[
          styles.container,
          {backgroundColor: isDarkMode ? AppColors.dark : 'white'} as any,
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
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
  },
  innerContianer: {
    marginTop: 31,
    marginBottom: 31,
  },
  buttonContainer: {
    marginBottom: 90,
  },
});
