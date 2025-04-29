import {Image, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icons} from '../utils/AppIcons';
import { AppColors} from '../utils/AppColors';
import { useTheme } from '../hooks/darkModeContext';

function BackIcon(): React.JSX.Element {
  const navigation = useNavigation();
  const {isDarkMode} = useTheme();
  return (
    <Pressable
      onPress={() => navigation.goBack()}
      android_ripple={{color: '#0056b3', borderless: false, radius: 21}}
      style={[
        styles.pressable,
        {
          backgroundColor: isDarkMode
            ? AppColors.darkerGray
            : AppColors.lighterGray,
        },
      ]}>
      <Image style={styles.image} source={Icons.backIcon} />
    </Pressable>
  );
}
export default BackIcon;
const styles = StyleSheet.create({
  pressable: {
    borderRadius: 21,
    overflow: 'hidden',
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

