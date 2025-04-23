import {StyleSheet, View} from 'react-native';
import HomeCategorizeIcons from './HomeCategorizeIcons';
import HomeTransactions from './HomeTransactions';
import AppImageBackground from '../AppImageBackground';

function HomeContent(): React.JSX.Element {
  return (
    <AppImageBackground>
      <View style={styles.homeCategorizeContainer}>
        <HomeCategorizeIcons />
        <HomeTransactions />
      </View>
    </AppImageBackground>
  );
}
export default HomeContent;

const styles = StyleSheet.create({
  homeCategorizeContainer: {
    width: '100%',
    paddingTop: 240,
  },
});
