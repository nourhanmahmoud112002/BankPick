import {Image, Pressable, StyleSheet} from 'react-native';
import {AppColors} from '../utils/AppColors';
import { useTheme } from '../hooks/darkModeContext';

function Icon({width, icon, onPress,imageWidth}: any): React.JSX.Element {
  const {isDarkMode} = useTheme();
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{color: '#0056b3', borderless: false, radius: width / 2}}
      style={[
        styles.pressable,
        {
          width: width,
          height: width,
          borderRadius: width / 2,
          backgroundColor: isDarkMode
            ? AppColors.darkerGray
            : AppColors.lighterGray,
        },
      ]}>
      <Image source={icon} style={[styles.image,{width:imageWidth || 20,height:imageWidth || 20}]} />
    </Pressable>
  );
}
export default Icon;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
  pressable: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
