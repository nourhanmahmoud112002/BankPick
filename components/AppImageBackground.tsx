import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

function AppImageBackground({marginTop, image}: any): React.JSX.Element {
  return (
    <ImageBackground
      source={image || require('../assets/images/Card.png')}
      style={[styles.backgroundImage, {marginTop: marginTop}]}
      resizeMode="contain"
    />
  );
}
export default AppImageBackground;

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
});
