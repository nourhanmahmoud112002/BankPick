import { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { AppColors, isDarkMode } from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import SearchInputText from '../../components/Home/SearchInputText';
import { LanguagesList } from '../../utils/Constants';
import LanguageItem from '../../components/Settings/LanguageItem';

function LanguagesScreen(): React.JSX.Element {
  const [selectedId, setSelectedId] = useState('1');

  return (
    <View style={styles.container}>
      <AppBar title="Language" />
      <SearchInputText text="Search Language" rightIcon={false} />
      <ScrollView>
        {LanguagesList.map((item, index) => (
          <LanguageItem
            key={index}
            item={item}
            checked={item.id === selectedId}
            onPress={() => setSelectedId(item.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default LanguagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
    backgroundColor: isDarkMode ? AppColors.dark : 'white',
  },
});
