import {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {isDarkMode} from '../utils/AppColors';
function CustomDatePicker(): React.JSX.Element {
  const [date, setDate] = useState(new Date());

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
