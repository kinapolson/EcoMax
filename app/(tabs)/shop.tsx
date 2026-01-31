import { TextInput, View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps"

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

  const moreEcoBusiness = [
    { name: "Origins", points: 25},
    { name: "Peralta Clothing", points: 25},
    { name: "...", points: 25},
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

            <Text style={styles.categoryLabel}>More</Text>

            {/* eco buisnesses grid */}
            <View style={styles.cardGrid}>
              {moreEcoBusiness.map((item, index) => (
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
          <>
          {/* search bar */}
          <View style={styles.mapSearchBar}>
            <TextInput
              placeholder="Find Near Me"
              placeholderTextColor="white"
              style={styles.input}
            />
          </View>

          {/* map */}
          <View style={styles.mapPlaceholder}>
              <MapView style={styles.map} />
            </View></>
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
    marginTop: 2.5,
    marginBottom: 6,
    textAlign: "center",
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
    backgroundColor: "#a47148",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },

  map: {
    width: "90%",
    height: "90%",
    borderRadius: 6,
  },
  
  mapSearchBar: {
    height: 50,
    backgroundColor: "#a47148",
    borderRadius: 29,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  input: {
    fontWeight: "bold",
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 15,
  },
});