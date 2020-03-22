import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/pages/Home";
import ShopListScreen from "./src/pages/ShopList";
import NotificationListScreen from "./src/pages/NotificationList";
import { RootStackParamList } from "./src/types/RootStackParamList";
import Layout from "./src/Layout";
import { store } from './src/store'
import { Provider } from "react-redux";

const Stack = createStackNavigator<RootStackParamList>();

function Root() {
  const navigationRef = React.useRef(null);

  const navigation = {
    reset: (params) => {
      navigationRef.current?.reset(params)
    }
  }

  return (
    <Layout navigation={navigation}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ShopList" component={ShopListScreen} />
          <Stack.Screen
            name="NotificationList"
            component={NotificationListScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Layout>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Root/>
    </Provider>
  )
}
