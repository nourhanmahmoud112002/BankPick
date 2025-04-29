import {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import { useTheme } from '../hooks/darkModeContext';
function CustomDatePicker(): React.JSX.Element {
  const [date, setDate] = useState(new Date());
  const {isDarkMode} = useTheme();

  return (
    <DatePicker
      date={date}
      onDateChange={setDate}
      mode="date"
      theme={isDarkMode ? 'dark' : 'light'}

    />
  );
}
export default CustomDatePicker;
