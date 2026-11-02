import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


const members = [
  { name: "Jonnedel Cuizon", route: "/jonnedel", role: "Leader" },
  { name: "Ian Pitogo", route: "/ian", role: "Member" },
  { name: "Novie Mae Sagaysay", route: "/novie", role: "Member" },
  { name: "Geoffrey Delan", route: "/geoffrey", role: "Member" },
  { name: "Marclarens Cababan", route: "/marclarens", role: "Member" },
] as const;

export default function TeamScreen() {
 
  const [search, setSearch] = useState("");

  
  const filtered = members.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>KEYBOARD WARRIORS</Text>

        <Text style={styles.subtitle}>TEAM 3</Text>

        <Text style={styles.instruction}>
          Select a member
        </Text>

        
        <TextInput
          style={styles.searchBox}
          placeholder="Search member..."
          value={search}
          onChangeText={setSearch}
        />

       
        {filtered.map((m) => (
          <TouchableOpacity
            key={m.route}
            onPress={() =>
              router.push({
                pathname: m.route,
                params: { name: m.name, role: m.role },
              })
            }
          >
            <View style={styles.memberCard}>
              <Text style={styles.memberName}>{m.name}</Text>
              <Text>{m.role}</Text>
            </View>
          </TouchableOpacity>
        ))}

        {filtered.length === 0 && (
          <Text style={styles.instruction}>No member found</Text>
        )}

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/")}
        >
          <Text style={styles.backText}>
            ← Back to Home
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F7",
  },

  content: {
    padding: 20,
    paddingTop: 50,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 5,
    color: "#555",
  },

  instruction: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
    color: "#777",
  },

  // CHANGED: new style
  searchBox: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },

  section: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginBottom: 15,
  },

  memberCard: {
    backgroundColor: "white",
    padding: 20,
    marginBottom: 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 30,
  },

  memberName: {
    fontSize: 18,
    fontWeight: "bold",
  },

  backButton: {
    backgroundColor: "#111827",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },

  backText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});