import {StyleSheet, Text, View} from 'react-native';
import {isDarkMode, AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import CircularImage from '../../components/CircularImage';
import InputField from '../../components/Auth/InputFiled';
import BirthPicker from '../../components/Settings/BirthPicker';

function EditProfile(): React.JSX.Element {
  return (
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
      <BirthPicker/>
      <View style={styles.footerContainer}>
        <Text style={styles.footer}>Joined <Text style={styles.footerDate}>28 Jan 2021</Text></Text>
      </View>
    </View>
  );
}
export default EditProfile;
const styles = StyleSheet.create({
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
  footerContainer:{
    alignItems:'center',
    marginTop:90,
  },
  footer: {
    fontSize: 13,
    fontWeight: 400,
    fontFamily: 'Poppins-Regular',
    color: AppColors.gray,
    lineHeight: 13,
  },
  footerDate:{
    fontSize: 14,
    fontWeight: 500,
    fontFamily: 'Poppins-Regular',
    color: AppColors.gray,
    lineHeight: 14,
  },
});
