import {Animated, StyleSheet, View} from 'react-native';
import {isDarkMode} from '../../utils/AppColors';
import {useRef, useEffect} from 'react';
function SplashScreen({navigation}: any): React.JSX.Element {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        navigation.replace('Onboarding');
      }, 4000);
    });
  }, [fadeAnim, scaleAnim, navigation]);

  return (
    <View style={styles.screen}>
      <Animated.Image
        source={require('../../assets/images/SplashIcon.png')}
        style={[
          styles.image,
          {opacity: fadeAnim, transform: [{scale: scaleAnim}]},
        ]}
      />
      <Animated.Text style={[styles.text, {opacity: fadeAnim}]}>
        BANKPICK
      </Animated.Text>
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 9,
  },
  text: {
    fontSize: 35,
    fontWeight: '600',
    color: isDarkMode ? 'white' : 'black',
    fontFamily: 'Poppins-Regular',
  },
});
