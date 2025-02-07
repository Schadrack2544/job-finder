import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Dot from "./Dot";

export default function CustomTabs() {
  const [activeTab, setActiveTab] = useState("Description");

  // Content to render based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Description":
        return (
          <View style={{}}>
            <View style={styles.descriptionContainer}>
              <Text style={styles.header}>Job Responsibilities:</Text>
              <View style={styles.list}>
                {[
                  "Deliver a well-crafted design that follows standards for quality and consistency.",
                  "Design creative solutions that deliver value to customers and meet business objectives.",
                  "Contribute to design critiques, conceptual discussions, and design system consistency.",
                ].map((item, index) => (
                  <View key={index} style={styles.listItem}>
                    <Dot/>
                    <Text style={styles.listText}>{item}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        );
      case "Company":
        return (
          <View style={styles.content}>
            <Text style={styles.text}>Company Information</Text>
            {/* Add content for Company */}
          </View>
        );
      case "Applicant":
        return (
          <View style={styles.content}>
            <Text style={styles.text}>Applicant Information</Text>
            {/* Add content for Applicant */}
          </View>
        );
      case "Salary":
        return (
          <View style={styles.content}>
            <Text style={styles.text}>Salary Information</Text>
            {/* Add content for Salary */}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {["Description", "Company", "Applicant", "Salary"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              activeTab === tab && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingTop: 20,
    minHeight:350
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTabButton: {
    borderBottomColor: "#333",
  },
  tabText: {
    fontSize: 14,
    color: "gray",
  },
  activeTabText: {
    color: "black",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: "black",
  },
  descriptionContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  list: {
    marginTop: 10,
    flex:1,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    gap:5,
    marginBottom: 10,
  },
  number: {
    fontSize: 16,
    color: "black",
    marginRight: 10,
  },
  listText: {
    fontSize: 16,
    color: "#aaa",
    flex: 1,
  },
});
