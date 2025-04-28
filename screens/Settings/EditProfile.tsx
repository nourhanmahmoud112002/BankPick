import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {isDarkMode, AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import CircularImage from '../../components/CircularImage';
import InputField from '../../components/Auth/InputFiled';
import DatePickerWithLabel from '../../components/DatePickerWithLabel';

function EditProfile(): React.JSX.Element {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <AppBar title="Edit Profile" />
        <View style={styles.innerContainer}>
          <CircularImage image={require('../../assets/images/userImage.png')} />
          <Text style={styles.name}>Tanya Myroniuk</Text>
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
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
    backgroundColor: isDarkMode ? AppColors.dark : 'white',
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
    color: isDarkMode ? 'white' : 'black',
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
