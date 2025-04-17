import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {AppColors, isDarkMode} from '../../utils/AppColors';

const CustomRangeSlider = () => {
  const [range, setRange] = useState([0]);

  return (
    <View style={styles.container}>
      <MultiSlider
        values={range}
        sliderLength={287}
        onValuesChange={setRange}
        min={0}
        max={10000}
        step={100}
        selectedStyle={styles.selectedStyle}
        unselectedStyle={styles.unselectedStyle}
        markerStyle={styles.markerStyle}
      />
      <View style={styles.labelContainerWrapper}>
        {/* Left Label */}
        <Text style={styles.label}>$0</Text>

        {/* Dynamic Middle Label */}
        {range[0] > 1500 && range[0] <= 7000 && (
          <View style={styles.middleLabelWrapper}>
            <Text
              style={[
                styles.label,
                {
                  left: `${(range[0] / 10000) * 100}%`,
                  position: 'absolute',
                  transform: [{translateX: -20}],
                  color: isDarkMode ? 'white' : 'black',
                } as any,
              ]}>
              ${range[0]}
            </Text>
          </View>
        )}

        {/* Right Label */}
        <Text style={styles.label}>$10,000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  selectedStyle: {
    backgroundColor: isDarkMode ? 'white' : AppColors.primaryColor,
    height: 7,
    borderRadius: 30,
  },
  unselectedStyle: {
    backgroundColor: isDarkMode ? '#292937' : 'white',
    height: 7,
    borderRadius: 30,
  },
  markerStyle: {
    backgroundColor: 'white',
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: AppColors.primaryColor,
    marginBottom: -6.5,
  },
  label: {
    fontSize: 16,
    color: AppColors.lightGray,
  },

  labelContainerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 287,
    position: 'relative',
    // marginTop: 10,
  },
  middleLabelWrapper: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default CustomRangeSlider;
