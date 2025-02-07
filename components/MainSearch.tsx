import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const MainSearch = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={36} color={"grey"} style={styles.icon}/>
      <TextInput
        placeholder="Search job, company. etc..."
        style={styles.searchInput}
      />
    </View>
  );
};

export default MainSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: -65,
    elevation:10,
    width: "100%",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    paddingHorizontal: 3,
  },
  icon: {
    color: 'grey',
    fontWeight: '300',
  }
});
