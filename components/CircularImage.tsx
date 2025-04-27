import {Image, StyleSheet} from 'react-native';

function CircularImage({image,width}: any): React.JSX.Element {
  return <Image source={image} style={[styles.image,{width:width || 60,height:width || 60}]} />;
}
export default CircularImage;
const styles = StyleSheet.create({
  image: {
    borderRadius: 30,
  },
});
