import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import AuthTitle from '../../components/Auth/AuthTitle';
import BackIcon from '../../components/BackIcon';
import InputField from '../../components/Auth/InputFiled';
import AppButton from '../../components/AppButton';
import RichText from '../../components/Auth/RichText';

function SignUpScreen({navigation}: any): React.JSX.Element {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.flex}
      keyboardVerticalOffset={50} // tweak this if needed
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <BackIcon />
          <AuthTitle>Sign Up</AuthTitle>
          <InputField label="Full Name" leftIcon="email" />
          <InputField label="Phone Number" leftIcon="phone" />
          <InputField label="Email Address" leftIcon="email" />
          <InputField label="Password" leftIcon="password" rightIcon="eye" />
          <View style={styles.button}>
            <AppButton onPress={() => navigation.navigate('Home')}>
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
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  button: {
    marginTop: 19,
    alignItems: 'center',
  },
});
