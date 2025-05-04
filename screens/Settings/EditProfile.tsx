import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import CircularImage from '../../components/CircularImage';
import InputField from '../../components/Auth/InputFiled';
import DatePickerWithLabel from '../../components/DatePickerWithLabel';
import {useTheme} from '../../hooks/darkModeContext';

function EditProfile(): React.JSX.Element {
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
        <AppBar title="Edit Profile" />
        <View style={styles.innerContainer}>
          <CircularImage image={require('../../assets/images/userImage.png')} />
          <Text
            style={[
              styles.name,
              {color: isDarkMode ? 'white' : 'black'} as any,
            ]}>
            Tanya Myroniuk
          </Text>
          <Text style={styles.title}>Senior Designer</Text>
        </View>
        <InputField label="Full Name" leftIcon="user" />
        <InputField label="Email Address" leftIcon="email" />
        <InputField label="Phone Number" leftIcon="phone" />
        <DatePickerWithLabel title="Birth Date" />
        <View style={styles.footerContainer}>
          <Text style={styles.footer}>
            Joined <Text style={styles.footerDate}>28 Jan 2021</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
export default EditProfile;
const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  innerContainer: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 30,
  },
  name: {
    fontSize: 17,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    marginBottom: 10,
    marginTop: 21,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: AppColors.gray,
  },
  footerContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 90,
  },
  footer: {
    fontSize: 13,
    fontWeight: 400,
    fontFamily: 'Poppins-Regular',
    color: AppColors.gray,
    lineHeight: 13,
  },
  footerDate: {
    fontSize: 14,
    fontWeight: 500,
    fontFamily: 'Poppins-Regular',
    color: AppColors.gray,
    lineHeight: 14,
  },
});
