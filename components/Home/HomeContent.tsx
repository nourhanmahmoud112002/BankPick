import {ImageBackground, StyleSheet, View} from 'react-native';
import HomeCategorizeIcons from './HomeCategorizeIcons';
import HomeTransactions from './HomeTransactions';

function HomeContent(): React.JSX.Element {
  return (
    <ImageBackground
      source={require('../../assets/images/Card.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      {/* Overlay UI goes here */}
      <View style={styles.homeCategorizeContainer}>
        <HomeCategorizeIcons />
        <HomeTransactions />
      </View>
    </ImageBackground>
  );
}
export default HomeContent;

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 450,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeCategorizeContainer: {
    width: '100%',
    paddingTop: 240,
  },
});
