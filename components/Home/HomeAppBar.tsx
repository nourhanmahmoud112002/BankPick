import {StyleSheet, Text, View} from 'react-native';
import CircularImage from '../CircularImage';
import {AppColors, isDarkMode} from '../../utils/AppColors';
import Icon from '../Icon';
import {Icons} from '../../utils/AppIcons';

function HomeAppBar(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <CircularImage image={require('../../assets/images/userImage.png')} />
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.nameText}>Tanya Myroniuk</Text>
      </View>
      <View style={styles.searchContainer}>
        <Icon width={50} icon={Icons.search} />
      </View>
    </View>
  );
}
export default HomeAppBar;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  textContainer: {
    marginLeft: 16,
  },
  welcomeText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: AppColors.gray,
    marginBottom: 8,
  },
  nameText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: isDarkMode ? 'white' : 'black',
  },
  searchContainer: {
    marginLeft: 80,
  },
});
