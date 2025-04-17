import {StyleSheet, Text, View} from 'react-native';
import SectionTitle from '../SectionTitle';
import CustomRangeSlider from './CustomRangeSlider';
import {isDarkMode} from '../../utils/AppColors';


function MonthySpendingLimit(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <SectionTitle title="Monthly Spending Limit" />
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Amount: $8,545.00</Text>
        <CustomRangeSlider />
      </View>
    </View>
  );
}
export default MonthySpendingLimit;
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  innerContainer: {
    marginTop:10,
    marginBottom:10,
    paddingHorizontal:24,
    paddingVertical:12,
    height: 113,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#232533',
    color: isDarkMode ? '#1E1E2D' : '#F4F4F4',
  },
  text:{
    color: isDarkMode ? 'white' : 'black',
    fontSize:13,
    fontWeight:'400',
    fontFamily:'Poppins-Regular',
  },
});
