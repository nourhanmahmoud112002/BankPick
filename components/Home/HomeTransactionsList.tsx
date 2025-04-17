import {StyleSheet, View} from 'react-native';
import HomeTransItem from './HomeTransItem';
// import {TransactionsList} from '../../utils/Constants';
type TransactionItem = {
  id: string;
  title: string;
  money: string;
  category: string;
  iconName: string;
};
type dataType = {
  data: TransactionItem[];
};
function HomeTransactionsList({data}:dataType): React.JSX.Element {
  return (
    <View style={styles.tranContainer}>
      {data.map((item, index) => (
        <HomeTransItem key={index} item={item} />
      ))}
    </View>
  );
}
export default HomeTransactionsList;

const styles = StyleSheet.create({
  tranContainer: {
    marginTop: 20,
  },
});
