import {Pressable, StyleSheet, Text, View} from 'react-native';
import {AppColors} from '../utils/AppColors';

function AppButton({children, onPress}: any): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: '#0056b3'}}
        style={({pressed}) => [styles.button, pressed && styles.pressed]}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  container: {
    width: 335,
    height: 56,
    borderRadius: 20,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
    backgroundColor: AppColors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    lineHeight: 24,
  },
  pressed: {
    opacity: 0.7,
  },
});
