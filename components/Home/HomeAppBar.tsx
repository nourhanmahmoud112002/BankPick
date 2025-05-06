import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import CircularImage from '../CircularImage';
import {AppColors} from '../../utils/AppColors';
import Icon from '../Icon';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../hooks/darkModeContext';
import {useIcons} from '../../utils/AppIcons';

function HomeAppBar(): React.JSX.Element {
  const navigation = useNavigation();
  const {isDarkMode} = useTheme();
  const {width} = useWindowDimensions();
  const Icons = useIcons();
  return (
    <View style={[styles.container, {paddingHorizontal: width * 0.06}]}>
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
