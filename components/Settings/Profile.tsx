import {StyleSheet, Text, View} from 'react-native';
import CircularImage from '../CircularImage';
import {AppColors, isDarkMode} from '../../utils/AppColors';

function Profile({name, title}: any): React.JSX.Element {
  return (
    <View style={styles.container}>
      <CircularImage image={require('../../assets/images/userImage.png')} />
      <View style={styles.innerContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}
export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 32,
    marginBottom: 10,
  },
  innerContainer:{
    marginLeft:22,
  },
  name: {
    fontSize: 17,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: isDarkMode ? 'white' : 'black',
    marginBottom:10,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: AppColors.gray,
  },
});
