import {Animated, FlatList, StyleSheet, View} from 'react-native';
import {OnboardingList} from '../../utils/Constants';
import OnboardingItem from '../../components/OnboardingItem';
import {useRef, useState} from 'react';
import AppButton from '../../components/AppButton';

function OnboardingScreen({navigation}: any): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef<FlatList<any>>(null);
  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 30}).current;
  const handleNext = () => {
    const nextIndex = currentIndex + 1;

    if (nextIndex < OnboardingList.length) {
      slideRef.current?.scrollToIndex({index: nextIndex, animated: true});
    } else {
      navigation.replace('SignIn');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <FlatList
          data={OnboardingList}
          renderItem={itemData => (
            <OnboardingItem
              item={itemData.item}
              scrollX={scrollX}
              currentIndex={currentIndex}
              onNext={handleNext}
            />
          )}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
        <View style={styles.button}>
          <AppButton onPress={handleNext}>Next</AppButton>
        </View>
      </View>
    </View>
  );
}
export default OnboardingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 3,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 60,
  },
});
