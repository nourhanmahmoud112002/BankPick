import {StyleSheet, View} from 'react-native';
import HomeCategorizeIcons from './HomeCategorizeIcons';
import HomeTransactions from './HomeTransactions';
import AppImageBackground from '../AppImageBackground';

function HomeContent(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <AppImageBackground />
      <View style={styles.contentWrapper}>
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
