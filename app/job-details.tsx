import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/Button";
import { MaterialIcons } from "@expo/vector-icons";
import App from "@/components/AboutJobs";
import CustomTabs from "@/components/AboutJobs";
import Dot from "@/components/Dot";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerComponent={
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/01/08/18/11/laptops-593296_960_720.jpg",
          }}
          width={200}
          height={200}
          style={styles.headerImage}
        />
      }
    >
      <View>
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2018/01/20/07/19/tallest-3093955_1280.jpg",
          }}
          width={80}
          height={80}
          style={styles.image}
        />
        <View style={styles.occupation}>
          <ThemedText type="title">Product Designer</ThemedText>
          <ThemedText type="default">California, USA</ThemedText>
        </View>
      </View>
      <CustomTabs />
      <View style={styles.skillsContainer}>
        <ThemedText type="title">Skills Needed</ThemedText>
        <View style={styles.jobConditions}>
          <Text style={styles.location}>Lead</Text>
          <Dot />
          <Text style={styles.location}>Ux Design</Text>
          <Dot />
          <Text style={styles.location}>Problem Solving</Text>
          <Dot />
          <Text style={styles.location}>Critical</Text>
        </View>
      </View>
      <View style={styles.applyButton}>
        <Button title="Apply Now" onPress={() => {}} style={styles.button} />
        <TouchableOpacity style={styles.contactUs}>
          <MaterialIcons name="comment" size={28} color={"#fff"} />
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
  },
  image: {
    marginTop: -70,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignSelf: "center",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  container: {
    height: "auto",
  },
  occupation: {
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 20,
    gap: 10,
  },
  applyButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  contactUs: {
    alignSelf: "center",
    padding: 10,
    backgroundColor: "#3F6CDF",
    borderRadius: 10,
  },
  button: {
    width: "70%",
    padding: 10,
  },
  skillsContainer:{
    marginBottom: 25,
  },
  jobConditions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  location: {
    fontSize: 14,
    color: "grey",
  },
});
