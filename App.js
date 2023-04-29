import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Welcomepage from './components/Welcomepage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import MainScreen from './components/MainScreen';
import UserPage from './components/UserPage';


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcomepage}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUpPage}
          options={{ title: 'Signup' }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: 'Main' }}
        />
          <Stack.Screen
          name="User"
          component={UserPage}
          options={{ title: 'User' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


