import React from 'react';
import {Image, ImageBackground, StyleSheet} from 'react-native';

function AppImageBackground({
  marginTop,
  image,
}: any): React.JSX.Element {
  return (
    <ImageBackground
      source={image || require('../assets/images/Card.png')}
      style={[styles.backgroundImage, {marginTop: marginTop}]}
      resizeMode="contain">
      <Image
        source={require('../assets/images/Ellipse.png')}
        style={styles.overlayImage}
        resizeMode="cover"
      />
    </ImageBackground>
  );
}
export default AppImageBackground;

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 200,
    position:'relative',
  },
  overlayImage: {
    position: 'absolute',
    top: 50,
    right: -25,
    width: '50%',
    height: 300,
  },
});
