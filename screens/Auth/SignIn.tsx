import {StyleSheet, useWindowDimensions, View} from 'react-native';
import AuthTitle from '../../components/Auth/AuthTitle';
import BackIcon from '../../components/BackIcon';
import InputField from '../../components/Auth/InputFiled';
import AppButton from '../../components/AppButton';
import RichText from '../../components/Auth/RichText';
import {useTheme} from '../../hooks/darkModeContext';
import {AppColors} from '../../utils/AppColors';

function SignInScreen({navigation}: any): React.JSX.Element {
  const width = useWindowDimensions().width;
  const {isDarkMode} = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          paddingHorizontal: width * 0.06,
          backgroundColor: isDarkMode ? AppColors.dark : 'white',
        } as any,
      ]}>
      <View style={styles.innerContainer}>
        <BackIcon />
        <AuthTitle>Sign In</AuthTitle>
        <InputField label="Email Address" leftIcon="email" />
        <InputField label="Password" leftIcon="password" rightIcon="eye" />
        <View style={styles.button}>
          <AppButton onPress={() => navigation.navigate('HomeWithBottomTab')}>
            Sign In
          </AppButton>
        </View>

        <RichText
          partOne="I’m a new user. "
          partTwo="Sign Up"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
}
export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    marginTop: 54,
  },
  button: {
    marginTop: 19,
    alignItems: 'center',
  },
});
