import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {AppColors} from '../../utils/AppColors';
import {useTheme} from '../../hooks/darkModeContext';

function CustomLineChart(): React.JSX.Element {
  const {isDarkMode} = useTheme();
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Current Balance</Text>
        <Text
          style={[
            styles.balanceText,
            {color: isDarkMode ? 'white' : 'black'} as any,
          ]}>
          $8,545.00
        </Text>
      </View>
      <View style={styles.chartContainer}>
        <LineChart
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
                color: () => AppColors.primaryColor,
                strokeWidth: 4,
              },
            ],
          }}
          width={Dimensions.get('window').width - 25}
          height={204}
          chartConfig={{
            backgroundColor: isDarkMode ? AppColors.dark : 'white',
            backgroundGradientFrom: isDarkMode ? AppColors.dark : 'white',
            backgroundGradientTo: isDarkMode ? AppColors.dark : 'white',
            decimalPlaces: 2, // optional, defaults to 2dp

            color: () => '#0066FF14',
            labelColor: () => `${AppColors.gray}`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '4',
              stroke: 'white',
              fill: AppColors.primaryColor,
            },
            propsForBackgroundLines: {
              stroke: isDarkMode ?  '#1E1E2D' : '#F4F4F4',
              strokeWidth: '1',
              strokeDasharray: '0,0',
            },
            propsForVerticalLabels: {
              fontSize: 15,
              fontFamily: 'Poppins-Regular',
              fontWeight: '400',
            },
          }}
          withVerticalLabels={true}
          withVerticalLines={true}
          withHorizontalLabels={false}
          withHorizontalLines={false}
          bezier
        />
      </View>
    </View>
  );
}
export default CustomLineChart;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    marginTop: 31,
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: AppColors.gray,
    marginBottom: 12,
  },
  balanceText: {
    fontSize: 26,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  chartContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
