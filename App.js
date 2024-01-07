import React, { useEffect } from "react";
import { useColorScheme } from "react-native";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import "expo-dev-client";
import { Provider, useDispatch } from "react-redux";
import { light, dark } from "./assets/Theme/Theme";
import AppNavigator from "./navigation/AppNavigator";
import store from "./redux/store";

const App = () => {
  const colorScheme = useColorScheme();
  console.log("Color scheme :", colorScheme)
  const theme =
    colorScheme === "dark"
      ? { ...MD3DarkTheme, colors: dark }
      : { ...MD3LightTheme, colors: light };

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
};

export default App;
