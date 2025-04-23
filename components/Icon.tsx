import {Image, Pressable, StyleSheet} from 'react-native';
import {AppColors, isDarkMode} from '../utils/AppColors';

function Icon({width, icon, onPress}: any): React.JSX.Element {
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
      <Image source={icon} style={styles.image} />
    </Pressable>
  );
}
export default Icon;

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  pressable: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
