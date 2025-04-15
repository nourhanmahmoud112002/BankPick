import {Animated, StyleSheet, useWindowDimensions, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
type PaginatorProps = {
  data: any[]; // Or replace `any[]` with the appropriate type for your data
  scrollX: Animated.Value;
};

function Paginator({data, scrollX}: PaginatorProps): React.JSX.Element {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [6, 19, 6],
          extrapolate: 'clamp',
        });
        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: [AppColors.gray, AppColors.primaryColor, AppColors.gray],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={i}
            style={[styles.dot, {width: dotWidth, backgroundColor: backgroundColor}]}
          />
        );
      })}
    </View>
  );
}
export default Paginator;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
  },
  dot: {
    height: 6,
    borderRadius: 3,
    backgroundColor: AppColors.gray,
    marginHorizontal: 8,
  },
});
