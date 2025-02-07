import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Button from "./Button";
import Dot from "./Dot";
import { millify } from "@/utils/numbers";
import { ThemedText } from "./ThemedText";
import { useRouter } from "expo-router";

type jobType = {
  companyName: string;
  companyLogoUrl: string;
  companyLocation: string;
  jobPosition: string;
  salaryPerMonth: number;
  level: string;
  workTime: string;
  type: string;
  index?: number;
};
const RecomendationCard: React.FC<jobType> = ({
  companyLogoUrl,
  companyName,
  companyLocation,
  jobPosition,
  salaryPerMonth,
  level,
  workTime,
  type,
  index,
}) => {
  const router = useRouter();
  return (
    <View
      style={[styles.container, index === 0 && { backgroundColor: "#ECF0FC" }]}
    >
      <View style={styles.companyInfo}>
        <Image
          source={{ uri: companyLogoUrl }}
          height={40}
          width={40}
          style={styles.image}
        />
        <View>
          <Text style={styles.title}>{companyName}</Text>
          <Text style={styles.location}>{companyLocation}</Text>
        </View>
        <Ionicons name="bookmark-outline" size={36} color={"grey"} />
      </View>
      <View style={styles.jobCriteria}>
        <Text style={styles.title}>{jobPosition}</Text>
        <View style={styles.jobConditions}>
          <Text style={styles.location}>{level}</Text>
          <Dot />
          <Text style={styles.location}>{workTime}</Text>
          <Dot />
          <Text style={styles.location}>{type}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Button title="Apply Now" onPress={() => router.push("/job-details")} />
        <ThemedText>
          <Text style={styles.salary}>${millify(salaryPerMonth)}</Text>
          /month
        </ThemedText>
      </View>
    </View>
  );
};

export default RecomendationCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    paddingVertical: 5,
    borderRadius: 15,
    marginBottom: 10,
    marginRight: 20,
    paddingTop:20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    width: 320,
    height: "auto",
  },
  image: {
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  location: {
    fontSize: 14,
    color: "grey",
  },
  companyInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  jobCriteria: {
    marginTop: 30,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    paddingVertical: 10,
    gap: 40,
  },
  jobConditions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    marginTop: -30,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -5,
    marginBottom: 10,
  },
  salary: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#212121",
  },
});
