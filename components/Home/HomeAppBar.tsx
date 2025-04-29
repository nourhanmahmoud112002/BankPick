import {StyleSheet, Text, View} from 'react-native';
import CircularImage from '../CircularImage';
import {AppColors} from '../../utils/AppColors';
import Icon from '../Icon';
import {Icons} from '../../utils/AppIcons';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../hooks/darkModeContext';

function HomeAppBar(): React.JSX.Element {
  const navigation = useNavigation();
  const {isDarkMode} = useTheme();
  return (
    <View style={styles.container}>
      <CircularImage image={require('../../assets/images/userImage.png')} />
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text
          style={[
            styles.nameText,
            {color: isDarkMode ? 'white' : 'black'} as any,
          ]}>
          Tanya Myroniuk
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <Icon
          width={50}
          icon={Icons.search}
          onPress={() => navigation.navigate('Search' as never)}
        />
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
  },
  searchContainer: {
    marginLeft: 80,
  },
});
