import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import {AppColors, isDarkMode} from '../../utils/AppColors';
import Paginator from '../onboarding/Paginator';
import {OnboardingList} from '../../utils/Constants';

function OnboardingItem({item, scrollX}: any): React.JSX.Element {
  const {width, height} = useWindowDimensions();

  return (
    <View style={[styles.container, {width, height}]}>
      <Image source={item.image} style={[styles.image]} />
      <Paginator data={OnboardingList} scrollX={scrollX} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.content}</Text>
      </View>
    </View>
  );
}

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  innerContainer: {
    paddingHorizontal: 27,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    fontFamily:'Poppins-Regular',
    color: isDarkMode ? 'white' : 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily:'Poppins-Regular',
    textAlign: 'center',
    lineHeight: 24,
    color: AppColors.gray,
    marginBottom: 52,
  },
});
