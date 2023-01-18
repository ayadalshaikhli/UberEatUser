import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";
import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import config from "./src/aws-exports";
import AuthContextProvider from "./src/contexts/AuthContext";

Amplify.configure({...config,
  Analytics: {
    disabled: true,
  },
});
function App() {
  return (
    <NavigationContainer>
        <AuthContextProvider>
          <RootNavigator/>
        </AuthContextProvider>
        <StatusBar style="light" />
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


export default withAuthenticator(App);