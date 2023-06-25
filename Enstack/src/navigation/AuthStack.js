import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import GetStartedScreen from "../screens/GetStartedScreen";

const OnboardingStack = createStackNavigator();

const OnboardingStackScreen = () => {
  return (
    <OnboardingStack.Navigator screenOptions={{ headerShown: false }}>
      <OnboardingStack.Screen name="Get Started" component={GetStartedScreen} />
      <OnboardingStack.Screen name="Login">
        {(props) => <LoginScreen {...props} />}
      </OnboardingStack.Screen>
      <OnboardingStack.Screen name="Signup" component={SignupScreen} />
    </OnboardingStack.Navigator>
  );
};

const AuthStack = () => {
  return <OnboardingStackScreen />;
};

export default AuthStack;
