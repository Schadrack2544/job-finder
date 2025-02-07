import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

type ButtonProps = {
  onPress: () => void;
  title: string;
  style?: any;
};
const Button: React.FC<ButtonProps> = ({ onPress, title ,style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[{...styles.button},style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3F6CDF",
    padding: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    // width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
