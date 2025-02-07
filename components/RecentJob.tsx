import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Dot from "./Dot";
import { ThemedText } from "./ThemedText";
import { millify } from "@/utils/numbers";
import moment from "moment";

type tRecentJobProps = {
  companyLogoUrl: string;
  jobPosition: string;
  salary: number;
  type: string;
  workTime: string;
  level: string;
  createdAt: Date;
};
const RecentJob: React.FC<tRecentJobProps> = ({
  jobPosition,
  level,
  workTime,
  type,
  companyLogoUrl,
  salary,
  createdAt,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.aboutJob}>
        <View style={styles.job}>
          <Image
            source={{ uri: companyLogoUrl ?? "" }}
            height={40}
            width={40}
            style={styles.image}
          />
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
        </View>
        <Ionicons name="bookmark-outline" size={36} />
      </View>
      <View style={styles.secondPart}>
        <ThemedText style={styles.salaryText}>
          <Text style={styles.salary}>${millify(salary)}</Text>
          /month
        </ThemedText>
        <Text style={styles.location}>{moment(createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};

export default RecentJob;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
    elevation: 1.5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    borderRadius: 10,
    width: "100%",
  },
  aboutJob: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    gap: 10,
  },
  job: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  jobCriteria: {
    marginBottom: 10,
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
  image: {
    borderRadius: 20,
  },
  location: {
    fontSize: 14,
    color: "grey",
  },
  salaryText: {
    marginLeft: 40,
  },
  salary: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#212121",
  },
  secondPart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    paddingHorizontal:20,
    marginBottom: 10,
  },
});
