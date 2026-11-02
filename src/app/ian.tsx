import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  const params = useLocalSearchParams<{ name?: string; role?: string }>();

  const [name, setName] = useState("Ian Pitogo");
  const [role, setRole] = useState("Member");

  useEffect(() => {
    if (params.name) setName(params.name);
    if (params.role) setRole(params.role);
  }, [params.name, params.role]);

  return (
    <ScrollView style={styles.container}>
      
      {/* Top Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>My Profile</Text>

        <View style={{ width: 40 }} />
      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>

        <Image
          source={{
            uri: "https://www.reddit.com/r/loreofleague/comments/1r97ocz/we_might_have_a_new_champion_trailer_taking_place/",
          }}
          style={styles.profileImage}
        />

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>TEAM 3</Text>
        </View>

      </View>

      {/* About */}
      <Text style={styles.sectionTitle}>Personal Information</Text>

      <View style={styles.infoCard}>

        <View style={styles.infoRow}>
          <Text style={styles.icon}>👤</Text>
          <View>
            <Text style={styles.label}>Full Name</Text>
            <Text style={styles.value}>{name}</Text>
          </View>
        </View>

        <View style={styles.line} />

        <View style={styles.infoRow}>
          <View>
            <Text style={styles.label}>Age</Text>
            <Text style={styles.value}>23 years old</Text>
          </View>
        </View>

        <View style={styles.line} />

        <View style={styles.infoRow}>
          <View>
            <Text style={styles.label}>Course</Text>
            <Text style={styles.value}>
              Bachelor of Science in Information Technology
            </Text>
          </View>
        </View>

        <View style={styles.line} />

        <View style={styles.infoRow}>
          <View>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>
              ianpitogooz@gmail.com
            </Text>
          </View>
        </View>

      </View>

      {/* About Me */}
      <Text style={styles.sectionTitle}>About Me</Text>

      <View style={styles.aboutCard}>
        <Text style={styles.aboutText}>
          Hello! My name is Ian. I am a member of Team 3
          and I enjoyed computer hardwares servicing, gaming, listening to music, and
          learning new things about technology, also sound system.
        </Text>
      </View>

      {/* Hobbies */}
      <Text style={styles.sectionTitle}>Hobbies & Interests</Text>

      <View style={styles.hobbiesContainer}>
        <View style={styles.hobby}>
          <Text> Gaming</Text>
        </View>

        <View style={styles.hobby}>
          <Text>Css, Coding</Text>
        </View>

        <View style={styles.hobby}>
          <Text>Sound System, Music</Text>
        </View>

        <View style={styles.hobby}>
          <Text> Technology, nuclear plants etc..</Text>
        </View>
      </View>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>BACK TO TEAM</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },

  header: {
    height: 70,
    backgroundColor: "#222831",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#393e46",
    alignItems: "center",
    justifyContent: "center",
  },

  backText: {
    color: "white",
    fontSize: 35,
    lineHeight: 38,
  },

  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  profileCard: {
    backgroundColor: "#222831",
    alignItems: "center",
    paddingBottom: 30,
    paddingTop: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: "white",
  },

  name: {
    color: "white",
    fontSize: 27,
    fontWeight: "bold",
    marginTop: 12,
  },

  role: {
    color: "#b8b8b8",
    fontSize: 16,
    marginTop: 3,
  },

  badge: {
    backgroundColor: "#00adb5",
    paddingHorizontal: 18,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 12,
  },

  badgeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 12,
    marginHorizontal: 20,
    color: "#222831",
  },

  infoCard: {
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 18,
    padding: 18,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },

  icon: {
    fontSize: 25,
    marginRight: 15,
  },

  label: {
    color: "#999",
    fontSize: 13,
  },

  value: {
    color: "#222831",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 2,
  },

  line: {
    height: 1,
    backgroundColor: "#eeeeee",
  },

  aboutCard: {
    backgroundColor: "white",
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 18,
  },

  aboutText: {
    fontSize: 15,
    lineHeight: 24,
    color: "#555",
  },

  hobbiesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 15,
  },

  hobby: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 20,
    margin: 5,
  },

  button: {
    backgroundColor: "#222831",
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 40,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});