import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import GetStartedScreen from "../screens/GetStartedScreen";

const OnboardingStack = createStackNavigator();

const OnboardingStackScreen = () => {
  return (
    <OnboardingStack.Navigator>
      <OnboardingStack.Screen name="Get Started" component={GetStartedScreen} />
      <OnboardingStack.Screen name="Home" component={LoginScreen} />
      <OnboardingStack.Screen name="Product" component={SignupScreen} />
    </OnboardingStack.Navigator>
  );
};

const Onboarding = () => {
  return <OnboardingStackScreen />;
};

export default Onboarding;
