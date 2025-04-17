import {Image, Pressable, StyleSheet, View} from 'react-native';
import {AppColors, isDarkMode} from '../utils/AppColors';

function Icon({width, icon, onPress}: any): React.JSX.Element {
  return (
    <Pressable onPress={onPress}>
      <View
        style={[
          styles.container,
          {width: width, height: width, borderRadius: width / 2},
        ]}>
        <Image source={icon} style={styles.image} />
      </View>
    </Pressable>
  );
}
export default Icon;
const styles = StyleSheet.create({
  container: {
    backgroundColor: isDarkMode ? AppColors.darkerGray : AppColors.lighterGray,
    // marginLeft: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
