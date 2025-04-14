import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './screens/Onboarding/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from './screens/Onboarding/OnboardingScreen';
import HomeScreen from './screens/Home/HomeScreen';
import SignInScreen from './screens/Auth/SignIn';
import {AppColors, isDarkMode} from './utils/AppColors';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: isDarkMode ? AppColors.dark : 'white',
          },
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
