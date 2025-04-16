import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {AppColors, isDarkMode} from '../../utils/AppColors';
import HomeTransItem from './HomeTransItem';
import {TransactionsList} from '../../utils/Constants';

function HomeTransactions(): React.JSX.Element {
  return (
   <ScrollView>
     <View style={styles.container}>
      <View style={styles.titleconstainer}>
        <Text style={styles.transTitle}>Transaction</Text>
        <Text style={styles.seeAllText}>See All</Text>
      </View>
      <View style={styles.tranContainer}>
        {TransactionsList.map((item, index) => (
          <HomeTransItem key={index} item={item} />
        ))}
      </View>
    </View>
   </ScrollView>
  );
}

export default HomeTransactions;
const styles = StyleSheet.create({

  container: {
    marginTop: 28,
  },
  titleconstainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  transTitle: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: isDarkMode ? 'white' : 'black',
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: AppColors.primaryColor,
  },
  tranContainer: {
    marginTop: 20,
  },
});
