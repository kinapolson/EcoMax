import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

let MapView: any = null;

if (Platform.OS !== "web") {
  MapView = require("react-native-maps").default;
}

export default function ShopScreen() {
  const [activeTab, setActiveTab] = useState("business"); {/* swith btwn tabs */ }
  const router = useRouter();
  const [searchText, setSearchText] = useState(""); {/* search map feat */ }
  {/* set default map area to orl */ }
  const [mapRegion, setMapRegion] = useState({
    latitude: 28.5383,
    longitude: -81.3792,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const ecoBusinesses = [
    {
      id: "indeu", name: "Indeu Apothecary", points: 25,
      logo: require("../../assets/images/logos/ia_logo.avif"),
    },
    {
      id: "goodgills", name: "Good Fills", points: 25,
      logo: require("../../assets/images/logos/gf_logo.png"),
    },
    {
      id: "chamberlins", name: "Chamberlin's", points: 25,
      logo: require("../../assets/images/logos/c_logo.png"),
    },
    {
      name: "Green Phantom", points: 25,
      logo: require("../../assets/images/logos/gp_logo.png"),
    },
    {
      name: "LÜFKA", points: 25,
      logo: require("../../assets/images/logos/l_logo.png"),
    },
    {
      name: "Orlando Cleaners", points: 25,
      logo: require("../../assets/images/logos/oc_logo.png"),
    },
  ];

  const moreEcoBusiness = [
    {
      name: "Origins", points: 25,
      logo: require("../../assets/images/logos/o_logo.png"),
    },
    {
      name: "Peralta Clothing", points: 25,
      logo: require("../../assets/images/logos/pc_logo.png"),
    },
    { name: "...", points: 25 },
  ];

  {/* search map feat */ }
  const handleSearch = async () => {
    if (!searchText) return;
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${searchText}`
      );

      const data = await response.json();
      if (data.length > 0) {
        setMapRegion({
          latitude: parseFloat(data[0].lat),
          longitude: parseFloat(data[0].lon),
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        });
      }
    } catch (error) {
      console.log("Location Not Found");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* logo and search setup */}
        <Image source={require('../../assets/images/ecomax_icon_dark.png')}
          style={styles.image}
        />
        <Pressable onPress={() => router.push("/search")}>
          <Ionicons name="search" size={24} color="#F5F0E6" />
        </Pressable>
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
                  <TouchableOpacity style={styles.card}
                    onPress={() => router.push(`/eco-shops/${item.id}`)}>
                    {/* buisness logo */}
                    <View style={styles.logoBox}>
                      <Image
                        source={item.logo}
                        style={styles.logoImage}
                        resizeMode="contain"
                      />
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
                      <Image
                        source={item.logo}
                        style={styles.logoImage}
                        resizeMode="contain"
                      />
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
        {activeTab === "map" && (
          <>
            {/* search bar */}
            <View style={styles.mapSearchBar}>
              <TextInput
                placeholder="Find Near Me"
                placeholderTextColor="white"
                style={styles.input}
                value={searchText}
                onChangeText={setSearchText}
                onSubmitEditing={handleSearch}
              />
            </View>

            {/* map */}
            <View style={styles.mapPlaceholder}>
              {/* tap feature to large map screen */}
              <Pressable
                style={styles.mapWrapper}
                onPress={() => router.push("/full-map")}
              >
                {Platform.OS === "web" ? (
                  <View style={[styles.map, { justifyContent: "center", alignItems: "center" }]}>
                    <Text style={{ color: "white", fontFamily: "Poppins_700Bold", textAlign: "center", paddingHorizontal: 12 }}>
                      Map preview is only avaliable on iOS/Android.
                      {"\n"}(Web version for Docker grading)
                    </Text>
                  </View>
                ) : (
                  <MapView style={styles.map} region={mapRegion} />
                )}
              </Pressable>
            </View>
          </>
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
    paddingTop: 70,
    paddingBottom: 20,
    paddingLeft: 25,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  searchText: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold',
  },

  image: {
    height: 49,
    width: 37,
  },

  //tabs
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#F5F0E6",
  },

  tabTxt: {
    fontSize: 15,
    color: "#264e36",
    fontFamily: 'Quicksand_400Regular',
  },

  activeTab: {
    fontFamily: 'Quicksand_700Bold',
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
    fontFamily: 'Quicksand_700Bold',
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

  logoImage: {
    width: "90%",
    height: "90%"
  },

  cardName: {
    fontSize: 10,
    fontFamily: 'Poppins_700Bold',
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
    color: "#1c4964",
    fontSize: 14,
    fontFamily: 'Quicksand_700Bold',
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
    flex: 1,
  },

  mapWrapper: {
    width: "90%",
    height: "92%",
    borderRadius: 6,
    overflow: "hidden",
  },

  mapSearchBar: {
    height: 50,
    backgroundColor: "#a47148",
    borderRadius: 29,
    justifyContent: "center",
    marginBottom: 15,
  },

  input: {
    fontFamily: 'Poppins_700Bold',
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 15,
    color: "white",
    marginLeft: 5,
  },
});