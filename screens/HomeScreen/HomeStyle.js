import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useTheme } from "react-native-paper";

const useDynamicStyles = () => {
  // const mode = useSelector((state) => state.app.themeMode);
  const mode = useTheme()

  const styles = StyleSheet.create({
    container: {
      backgroundColor: mode.background, // Set the background color based on the theme mode
      flex: 1, // Ensure the component takes up the entire screen
    },
  });

  return styles;
};

export default useDynamicStyles;
