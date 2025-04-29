import {StyleSheet, Text, View} from 'react-native';
import CircularImage from '../CircularImage';
import {AppColors} from '../../utils/AppColors';
import {useTheme} from '../../hooks/darkModeContext';

function Profile({name, title}: any): React.JSX.Element {
  const {isDarkMode} = useTheme();
  return (
    <View style={styles.container}>
      <CircularImage image={require('../../assets/images/userImage.png')} />
      <View style={styles.innerContainer}>
        <Text
          style={[styles.name, {color: isDarkMode ? 'white' : 'black'} as any]}>
          {name}
        </Text>
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
  innerContainer: {
    marginLeft: 22,
  },
  name: {
    fontSize: 17,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: AppColors.gray,
  },
});
