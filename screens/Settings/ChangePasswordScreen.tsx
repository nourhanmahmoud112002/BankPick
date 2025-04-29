import {StyleSheet, Text, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import InputField from '../../components/Auth/InputFiled';
import AppButton from '../../components/AppButton';
import {useTheme} from '../../hooks/darkModeContext';

function ChangePasswordScreen(): React.JSX.Element {
  const {isDarkMode} = useTheme();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? AppColors.dark : 'white'} as any,
      ]}>
      <AppBar title="Change Password" />
      <View style={styles.innerContainer}>
        <InputField label="Current Password" leftIcon="password" />
        <InputField label="New Password" leftIcon="password" rightIcon="eye" />
        <InputField label="Confirm New Password" leftIcon="password" />
        <Text style={styles.validationText}>Both Passwords Must Match</Text>
      </View>
      <AppButton>Change Password</AppButton>
    </View>
  );
}
export default ChangePasswordScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
  },
  innerContainer: {
    marginTop: 32,
  },
  validationText: {
    color: AppColors.gray,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    marginBottom: 39,
  },
});
