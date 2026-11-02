import { router, Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Profile() {
  const params = useLocalSearchParams<{ name?: string; role?: string }>();

  const [name, setName] = useState("Jonnedel Cuizon");
  const [role, setRole] = useState("Leader");

  useEffect(() => {
    if (params.name) setName(params.name);
    if (params.role) setRole(params.role);
  }, [params.name, params.role]);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView style={styles.container}>

      
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Text style={styles.backText}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>PROFILE</Text>
        </View>

        
        <View style={styles.profile}>
          <Text style={styles.name}>{name}</Text>

          <View style={styles.roleBox}>
            <Text style={styles.role}>TEAM 3 • {role.toUpperCase()}</Text>
          </View>
        </View>

        
        <Text style={styles.title}>Personal Information</Text>

        <View style={styles.card}>

          <View style={styles.row}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>👤</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.label}>Full Name</Text>
              <Text style={styles.value}>Jonnedel M. Cuizon</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>⭐</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.label}>Role</Text>
              <Text style={styles.value}>{role}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>🎂</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.label}>Age</Text>
              <Text style={styles.value}>26</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>📅</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.label}>Birthday</Text>
              <Text style={styles.value}>July 1, 2000</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>🎓</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.label}>Course</Text>
              <Text style={styles.value}>
                BS Information Technology
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>📧</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.label}>Email / Contact</Text>
              <Text style={styles.value}>
                jonnedelcuizon2018@gmail.com / 09916033660
              </Text>
            </View>
          </View>

        </View>

        
        <Text style={styles.title}>Hobbies</Text>

        <View style={styles.hobbies}>
          <View style={styles.hobbyCard}>
            <Text style={styles.hobbyIcon}>🎮</Text>
            <Text style={styles.hobbyText}>Gaming</Text>
          </View>
        </View>

        
        <Text style={styles.title}>Favorite</Text>

        <View style={styles.hobbies}>
          <View style={styles.hobbyCard}>
            <Text style={styles.hobbyIcon}>❤️</Text>
            <Text style={styles.hobbyText}>CrossfirePH</Text>
          </View>
        </View>

        
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => router.push("/team")}
        >
          <Text style={styles.bottomButtonText}>
            BACK TO TEAM
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </>
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
    paddingTop: 10,
    paddingBottom: 35,
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

  iconBox: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    fontSize: 21,
  },

  textContainer: {
    marginLeft: 15,
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

  hobbies: {
    flexDirection: "row",
    marginHorizontal: 20,
  },

  hobbyCard: {
    backgroundColor: "white",
    minWidth: "31%",
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 16,
    alignItems: "center",
    elevation: 2,
  },

  hobbyIcon: {
    fontSize: 28,
  },

  hobbyText: {
    color: "#334155",
    fontWeight: "600",
    marginTop: 8,
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