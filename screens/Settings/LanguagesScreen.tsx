import { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { AppColors } from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import SearchInputText from '../../components/Home/SearchInputText';
import { LanguagesList } from '../../utils/Constants';
import LanguageItem from '../../components/Settings/LanguageItem';
import { useTheme } from '../../hooks/darkModeContext';

function LanguagesScreen(): React.JSX.Element {
  const [selectedId, setSelectedId] = useState('1');
  const {isDarkMode} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: isDarkMode ? AppColors.dark : 'white'} as any]}>
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
  },
});
