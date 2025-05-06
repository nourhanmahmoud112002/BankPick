import {StyleSheet, useWindowDimensions, View} from 'react-native';
import HomeCategorizeIcons from './HomeCategorizeIcons';
import HomeTransactions from './HomeTransactions';
import AppImageBackground from '../AppImageBackground';
import AppOverlayBackImage from '../AppOverlayBackImage';

function HomeContent(): React.JSX.Element {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <AppImageBackground />
      <AppOverlayBackImage />
      <View style={[styles.contentWrapper, {paddingHorizontal: width * 0.06}]}>
        <HomeCategorizeIcons />
        <HomeTransactions />
      </View>
    </View>
  );
}

export default HomeContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
  },
});
