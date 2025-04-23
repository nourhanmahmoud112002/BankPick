import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

function AppImageBackground({
  children,
  marginTop,
  image,
}: any): React.JSX.Element {
  return (
    <ImageBackground
      source={image || require('../assets/images/Card.png')}
      style={[styles.backgroundImage, {marginTop: marginTop}]}
      resizeMode="contain">
      {/* Overlay UI goes here */}
      {children}
    </ImageBackground>
  );
}
export default AppImageBackground;

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 450,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 255, 0, 0.3)',
  },
});
