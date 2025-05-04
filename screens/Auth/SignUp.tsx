import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import AuthTitle from '../../components/Auth/AuthTitle';
import BackIcon from '../../components/BackIcon';
import InputField from '../../components/Auth/InputFiled';
import AppButton from '../../components/AppButton';
import RichText from '../../components/Auth/RichText';
import {AppColors} from '../../utils/AppColors';
import {useTheme} from '../../hooks/darkModeContext';

function SignUpScreen({navigation}: any): React.JSX.Element {
  const width = useWindowDimensions().width;
  const {isDarkMode} = useTheme();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.flex}
      keyboardVerticalOffset={50} // tweak this if needed
    >
      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          {backgroundColor: isDarkMode ? AppColors.dark : 'white'} as any,
        ]}>
        <View style={[styles.container, {paddingHorizontal: width * 0.06}]}>
          <BackIcon />
          <AuthTitle>Sign Up</AuthTitle>
          <InputField label="Full Name" leftIcon="user" />
          <InputField label="Phone Number" leftIcon="phone" />
          <InputField label="Email Address" leftIcon="email" />
          <InputField label="Password" leftIcon="password" rightIcon="eye" />
          <View style={styles.button}>
            <AppButton onPress={() => navigation.navigate('HomeWithBottomTab')}>
              Sign Up
            </AppButton>
          </View>

          <RichText
            partOne="Already have an account ? "
            partTwo="Sign In"
            onPress={() => navigation.goBack()}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    marginTop: 30,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    // paddingHorizontal: 25,
    paddingTop: 20,
  },
  button: {
    marginTop: 19,
    alignItems: 'center',
  },
});
