import {Image, StyleSheet} from 'react-native';

function CircularImage({image}: any): React.JSX.Element {
  return <Image source={image} style={styles.image} />;
}
export default CircularImage;
const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
