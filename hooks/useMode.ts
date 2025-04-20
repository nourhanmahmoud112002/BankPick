import {useState} from 'react';

const useMode = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return {isEnabled,toggleSwitch};
};
export default useMode;
