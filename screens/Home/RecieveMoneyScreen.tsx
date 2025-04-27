import {StyleSheet, View} from 'react-native';
import {isDarkMode, AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import InputField from '../../components/Auth/InputFiled';
import BirthPicker from '../../components/Settings/BirthPicker';
import SendMoneySection from '../../components/Home/SendMoneySection';
import AppButton from '../../components/AppButton';

function RecieveMoneyScreen(): React.JSX.Element {
  return <View style={styles.container}>
    <AppBar title="Recieve Money"/>
    <View style={styles.innerContianer}>
        <InputField label="Payer Name" leftIcon="user" defaultValue="Tanya Myroniuk"/>
        <InputField label="Email Addess " leftIcon="email" defaultValue="Tanya Myroniuk@gmail.com"/>
        <InputField label="Description" leftIcon="user" defaultValue="Tanya Myroniuk"/>
        <BirthPicker title="Monthly Due By"/>
    </View>
    <SendMoneySection/>
    <AppButton>Recieve Money</AppButton>
  </View>;
}
export default RecieveMoneyScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
    backgroundColor: isDarkMode ? AppColors.dark : 'white',
  },
  innerContianer:{
    marginTop:31,
    marginBottom:31,
  },
});
