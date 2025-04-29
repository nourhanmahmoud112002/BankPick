import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './screens/Onboarding/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from './screens/Onboarding/OnboardingScreen';
import HomeScreen from './screens/Home/HomeScreen';
import SignInScreen from './screens/Auth/SignIn';
import {AppColors} from './utils/AppColors';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SignUpScreen from './screens/Auth/SignUp';
import HomeWithBottomTabs from './screens/Home/HomewithBottomTabs';
import ProfileScreen from './screens/Settings/ProfileScreen';
import SettingsScreen from './screens/Settings/SettingsScreen';
import EditProfile from './screens/Settings/EditProfile';
import AddNewCardScreen from './screens/Home/AddNewCardScreen';
import AllCardsScreen from './screens/Home/AllCardsScreen';
import SearchScreen from './screens/Home/SearchScreen';
import SendMoneyScreen from './screens/Home/SendMoneyScreen';
import TermsAndConditionsScreen from './screens/Settings/TermsAndConditionsScreen';
import ChangePasswordScreen from './screens/Settings/ChangePasswordScreen';
import LanguagesScreen from './screens/Settings/LanguagesScreen';
import TransactionHistoryScreen from './screens/Home/TransactionHistoryScreen';
import RecieveMoneyScreen from './screens/Home/RecieveMoneyScreen';
import {ThemeProvider, useTheme} from './hooks/darkModeContext';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  const {isDarkMode} = useTheme();
  return (
    <ThemeProvider>
      <SafeAreaProvider>
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
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen
              name="HomeWithBottomTab"
              component={HomeWithBottomTabs}
            />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="AddNewCard" component={AddNewCardScreen} />
            <Stack.Screen name="AllCards" component={AllCardsScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="SendMoney" component={SendMoneyScreen} />
            <Stack.Screen
              name="TermsAndConditions"
              component={TermsAndConditionsScreen}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePasswordScreen}
            />
            <Stack.Screen name="Language" component={LanguagesScreen} />
            <Stack.Screen
              name="TransactionHistory"
              component={TransactionHistoryScreen}
            />
            <Stack.Screen name="ReceiveMoney" component={RecieveMoneyScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
