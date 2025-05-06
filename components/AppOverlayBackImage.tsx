import {Image, StyleSheet} from 'react-native';

function AppOverlayBackImage({marginTop}:any): React.JSX.Element {
  return (
    <Image
      source={require('../assets/images/Ellipse.png')}
      style={[styles.overlayImage,{marginTop:marginTop}]}
      resizeMode="cover"
    />
  );
}
export default AppOverlayBackImage;
const styles = StyleSheet.create({
  overlayImage: {
    position: 'absolute',
    top: 50,
    right: 0,
    width: '45%',
    height: 300,
  },
});
