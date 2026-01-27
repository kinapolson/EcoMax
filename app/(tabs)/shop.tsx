import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

export default function ShopScreen() {
  {/* swith btwn tabs */}
  const [activeTab, setActiveTab] = useState("business");

  const ecoBusinesses = [
    { name: "Indeu Apothecary", points: 25 },
    { name: "Good Fills", points: 25 },
    { name: "Chamberlin's", points: 25 },
    { name: "Green Phantom", points: 25 },
    { name: "LÜFKA", points: 25 },
    { name: "Orlando Cleaners", points: 25 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* logo and search setup */}
      </View>

       {/* tab navigation */}
      <View style={styles.tabRow}>
        {/* business tab */}
        <TouchableOpacity onPress={() => setActiveTab("business")}>
          <Text
            style={[
              styles.tabTxt,
              activeTab === "business" && styles.activeTab,
            ]}
          >
            Business
          </Text>
        </TouchableOpacity>
        
        {/* map tab */}
        <TouchableOpacity onPress={() => setActiveTab("map")}>
          <Text
            style={[
              styles.tabTxt,
              activeTab === "map" && styles.activeTab,
            ]}
          >
            Map
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        
        {/* busiesss content*/}
        {activeTab === "business" && (
          <>
            <Text style={styles.categoryLabel}>Featured</Text>

            {/* eco buisnesses grid */}
            <View style={styles.cardGrid}>
              {ecoBusinesses.map((item, index) => (
                <View key={index} style={styles.cardWrapper}>
                  {/* card */}
                  <TouchableOpacity style={styles.card}>
                    {/* buisness logo */}
                    <View style={styles.logoBox}>
                      <Text style={styles.logotTxt}>{item.name[0]}</Text>
                    </View>

                    {/* eco pts */}                 
                    <View style={styles.ptsRow}>
                      <Text style={styles.ptsTxt}>{item.points}</Text>
                    </View>
                  </TouchableOpacity>

                  {/* buisness name */}
                  <Text style={styles.cardName}>{item.name}</Text>
                </View>
              ))}
            </View>
          </>
        )}

        {/* map content */}
        {activeTab === "map" &&(
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapTxt}>
              Map
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  //body
  container: {
    flex: 1,
    backgroundColor: "#F5F0E6",
  },

  //header
  header: {
    backgroundColor: "#264e36",
    paddingTop: 80,
    paddingBottom: 65,
    paddingLeft: 20,
  },

  //tabs
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "F5F0E6",
  },

  tabTxt: {
    fontSize: 15,
    color: "#264e36",
  },
  
  activeTab: {
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#264e36",
    paddingBottom: 4,
  },

  content: {
    padding: 16,
  },

  //card group labels
  categoryLabel: {
    backgroundColor: "#A47148",
    color: "#F5F0E6",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    marginBottom: 12,
    fontSize: 17,
    fontWeight: "bold",
  },

  //eco buisness card grid
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  cardWrapper: {
    width: "31%",
    marginBottom: 16,
  },

  //eco business card
  card: {
    backgroundColor: "#264e36",
    borderRadius: 10,
    padding: 8,
  },

  logoBox: {
    height: 60,
    backgroundColor: "#F5F0E6",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  logotTxt: {
    color: "#5ca377",
    fontSize: 24,
    fontWeight: "bold",
  },

  cardName: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#264e36",
    marginBottom: 6,
  },

  ptsRow: {
    backgroundColor: "#F5F0E6",
    borderRadius: 6,
    paddingVertical: 4,
    alignItems: "center",
  },

  ptsTxt: {
    color: "#264e36",
    fontSize: 12,
    fontWeight: "bold",
  },

  //map
  mapPlaceholder: {
    height: 445,
    backgroundColor: "#161618",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  mapTxt: {
    color: "#F5F0E6",
    fontSize: 16,
    fontWeight: "bold",
  },
});