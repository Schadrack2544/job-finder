import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const HeaderView: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userView}>
        <Text style={styles.defaultText}>Hello</Text>
        <Text style={styles.title}>Leslie Alexander</Text>
      </View>
      <View style={styles.iconWrapper}>
        <Ionicons name="notifications-sharp" color="white" size={28}/>
      </View>
    </View>
  );
};

export default HeaderView;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 60,
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: "transparent",
    alignSelf: "center",
    width: "100%",
  },
  userView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 8,
  },
  defaultText: {
    color: "white",
    fontSize: 14,
    fontWeight: "300",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  iconWrapper: {
    backgroundColor: "#0B7BEBFF",
    padding: 10,
    borderRadius: 10,
    width: 60,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
