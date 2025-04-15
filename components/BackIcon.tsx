import {Image, Pressable, StyleSheet} from 'react-native';
import {isDarkMode} from '../utils/AppColors';
import {useNavigation} from '@react-navigation/native';

function BackIcon(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.goBack()}
      android_ripple={{color: '#0056b3', borderless: true, radius: 24}}
      style={styles.pressable}>
      <Image
        style={styles.image}
        source={
          isDarkMode
            ? require('../assets/images/BackIconDark.png')
            : require('../assets/images/BackIconLight.png')
        }
      />
    </Pressable>
  );
}
export default BackIcon;
const styles = StyleSheet.create({
  pressable: {
    borderRadius: 24,
    overflow: 'hidden',
    width: 42,
    height: 42,
    marginTop: 54,
    marginBottom:53,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
