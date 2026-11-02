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

export default function Profile() {
  const params = useLocalSearchParams<{ name?: string; role?: string }>();

  const [name, setName] = useState("Novie Mae Sagaysay");
  const [role, setRole] = useState("Member");

  useEffect(() => {
    if (params.name) setName(params.name);
    if (params.role) setRole(params.role);
  }, [params.name, params.role]);

  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>PROFILE</Text>
      </View>

      {/* Profile */}
      <View style={styles.profile}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://i.pravatar.cc/300?img=47" }}
            style={styles.image}
          />
        </View>

        <Text style={styles.name}>{name}</Text>

        <View style={styles.roleBox}>
          <Text style={styles.role}>TEAM 3 • {role.toUpperCase()}</Text>
        </View>

        <Text style={styles.description}>
          Information Technology Student
        </Text>
      </View>

      {/* Information */}
      <Text style={styles.title}>Personal Information</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Full Name</Text>
            <Text style={styles.value}>{name}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Age</Text>
            <Text style={styles.value}>Add age here</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Course</Text>
            <Text style={styles.value}>BS Information Technology</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>Add email here</Text>
          </View>
        </View>
      </View>

      {/* About */}
      <Text style={styles.title}>About Me</Text>

      <View style={styles.aboutCard}>
        <Text style={styles.about}>
          Hello! I'm {name}, a member of Team 3 Keyboard Warriors. Add
          your own short introduction here.
        </Text>
      </View>

      {/* Hobbies */}
      <Text style={styles.title}>Hobbies</Text>

      <View style={styles.hobbies}>
        <View style={styles.hobbyCard}>
          <Text style={styles.hobbyText}>Add hobby 1</Text>
        </View>

        <View style={styles.hobbyCard}>
          <Text style={styles.hobbyText}>Add hobby 2</Text>
        </View>

        <View style={styles.hobbyCard}>
          <Text style={styles.hobbyText}>Add hobby 3</Text>
        </View>
      </View>

      {/* Back */}
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => router.back()}
      >
        <Text style={styles.bottomButtonText}>BACK TO TEAM</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FB",
  },

  header: {
    height: 65,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  backButton: {
    position: "absolute",
    left: 18,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },

  backText: {
    color: "white",
    fontSize: 32,
    marginTop: -3,
  },

  profile: {
    backgroundColor: "#2563EB",
    alignItems: "center",
    paddingBottom: 35,
  },

  imageContainer: {
    padding: 5,
    backgroundColor: "white",
    borderRadius: 70,
    marginTop: 20,
  },

  image: {
    width: 125,
    height: 125,
    borderRadius: 63,
  },

  name: {
    color: "white",
    fontSize: 27,
    fontWeight: "bold",
    marginTop: 15,
  },

  roleBox: {
    backgroundColor: "#1D4ED8",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 8,
  },

  role: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },

  description: {
    color: "#DBEAFE",
    fontSize: 14,
    marginTop: 8,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E293B",
    marginTop: 25,
    marginBottom: 12,
    marginHorizontal: 20,
  },

  card: {
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 18,
    paddingVertical: 8,
    elevation: 3,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },

  textContainer: {
    flex: 1,
  },

  label: {
    color: "#94A3B8",
    fontSize: 12,
  },

  value: {
    color: "#1E293B",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 3,
  },

  aboutCard: {
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 18,
    padding: 20,
    elevation: 3,
  },

  about: {
    color: "#475569",
    fontSize: 15,
    lineHeight: 24,
  },

  hobbies: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },

  hobbyCard: {
    backgroundColor: "white",
    width: "31%",
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
    elevation: 2,
  },

  hobbyText: {
    color: "#334155",
    fontWeight: "600",
  },

  bottomButton: {
    backgroundColor: "#2563EB",
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 40,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  bottomButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});