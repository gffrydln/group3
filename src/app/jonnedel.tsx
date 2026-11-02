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

      <ScrollView>
        <View style={styles.container}>

          <Text style={styles.name}>{name}</Text>
          <Text style={styles.role}>TEAM {role.toUpperCase()}</Text>

          <View style={styles.infoBox}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.info}>Jonnedel M. Cuizon</Text>

            <Text style={styles.label}>Role</Text>
            <Text style={styles.info}>{role}</Text>

            <Text style={styles.label}>Age</Text>
            <Text style={styles.info}>26</Text>

            <Text style={styles.label}>Birthday</Text>
            <Text style={styles.info}>July 1, 2000</Text>

            <Text style={styles.label}>Course</Text>
            <Text style={styles.info}>BS Information Technology</Text>

            <Text style={styles.label}>Email / Contact</Text>
            <Text style={styles.info}>
              jonnedelcuizon2018@gmail.com / 09916033660
            </Text>

            <Text style={styles.label}>Hobbies</Text>
            <Text style={styles.info}>Gaming</Text>

            <Text style={styles.label}>Favorite</Text>
            <Text style={styles.info}>CrossfirePH</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/team")}
          >
            <Text style={styles.buttonText}>Back to Team</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
  },

  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 40,
  },

  role: {
    fontSize: 15,
    color: "gray",
    marginTop: 4,
  },

  infoBox: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
    marginTop: 8,
  },

  info: {
    fontSize: 17,
    marginTop: 2,
    marginBottom: 5,
  },

  button: {
    backgroundColor: "#222",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});