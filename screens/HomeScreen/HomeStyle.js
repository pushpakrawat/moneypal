import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { dark, light } from "../../assets/Theme/Theme";

const useDynamicStyles = () => {
  const mode = useSelector((state) => state.app.themeMode);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: mode.background, // Set the background color based on the theme mode
      flex: 1, // Ensure the component takes up the entire screen
    },
  });

  return styles;
};

export default useDynamicStyles;
