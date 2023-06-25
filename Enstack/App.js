import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/navigation/BottomTabs";
import Onboarding from "./src/navigation/Onboarding";

const getAuthenticationStatus = () => {
  return false;
};

export default function App() {
  const isAuthenticated = getAuthenticationStatus();

  return (
    <NavigationContainer>
      {isAuthenticated ? <MyTabs /> : <Onboarding />}
    </NavigationContainer>
  );
}
