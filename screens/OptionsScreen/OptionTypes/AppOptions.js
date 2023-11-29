import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../redux/actions/appActions";
import { light, dark } from "../../../assets/Theme/Theme";

const AppOptions = () => {
  const mode = useSelector((state) => state.app.themeMode);
  console.log("theme mode", mode);
  const dispatch = useDispatch();

  const toggleSwitch = () => {
    // Toggle between darkScheme and lightScheme
    dispatch(toggleTheme(mode === light ? dark : light));
  };

  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 16,
      borderColor: mode.outline,
      backgroundColor: mode.background,
      alignSelf: "stretch", // Expand to the top
    },
    container2: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 16,
      borderColor: mode.outline,
      backgroundColor: mode.background,
    },
    label: {
      fontSize: 18,
      color: mode.text,
    },
    colorBox: {
      width: 20,
      height: 20,
      borderRadius: 80,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: mode.primary,
    },
    colorBoxText: {
      color: mode.text,
    },
  });

  return (
    <View style={dynamicStyles.container}>
      <View style={dynamicStyles.container2}>
        <Text style={dynamicStyles.label}>Dark Mode</Text>
        <Switch value={mode === light} onValueChange={toggleSwitch} />
      </View>
    </View>
  );
};

export default AppOptions;
