import { TextInput, View, Text, StyleSheet, ScrollView, Pressable, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RewardsScreen() {
  {/* swith btwn tabs */}
  const [activeTab, setActiveTab] = useState("browse");

  const favorites = [
    { name: "Indeu Apothecary", points: 25 },
    { name: "Good Fills", points: 25 },
    { name: "Chamberlin's", points: 25 },
  ];

  const claimed = [
    { name: "Origins", points: 25 },
    { name: "Peralta Clothing", points: 25 },
    { name: "...", points: 25 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* logo and search setup */}
        <Image source={require('../../assets/images/ecomax_icon_dark.png')} 
          style={styles.image}
        />
        <Pressable onPress={() => router.back()}>
          <Ionicons name="search" size={24} color="#F5F0E6" />
        </Pressable>
      </View>

      {/* tab navigation */}
      <View style={styles.tabRow}>
        <TouchableOpacity onPress={() => setActiveTab("browse")}>
          <Text
            style={[
              styles.tabTxt,
              activeTab === "browse" && styles.activeTab,
            ]}
          >
            Browse
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("redeem")}>
          <Text
            style={[
              styles.tabTxt,
              activeTab === "redeem" && styles.activeTab,
            ]}
          >
            Redeem
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("leaderboard")}>
          <Text
            style={[
              styles.tabTxt,
              activeTab === "leaderboard" && styles.activeTab,
            ]}
          >
            Leaderboard
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.pointsBar}>
          <Text style={styles.pointsTxt}>Eco Points</Text>
          <Text style={styles.pointsValue}>350</Text>
        </View>

        <Text style={styles.categoryLabel}>Favorites</Text>

        <View style={styles.cardGrid}>
          {favorites.map((item, index) => (
            <View key={index} style={styles.cardWrapper}>
              <TouchableOpacity style={styles.card}>
                <View style={styles.logoBox}>
                  <Text style={styles.logotTxt}>{item.name[0]}</Text>
                </View>
                <View style={styles.ptsRow}>
                  <Text style={styles.ptsTxt}>{item.points}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <Text style={styles.categoryLabel}>Previously Claimed</Text>

        <View style={styles.cardGrid}>
          {claimed.map((item, index) => (
            <View key={index} style={styles.cardWrapper}>
              <TouchableOpacity style={styles.card}>
                <View style={styles.logoBox}>
                  <Text style={styles.logotTxt}>{item.name[0]}</Text>
                </View>
                <View style={styles.ptsRow}>
                  <Text style={styles.ptsTxt}>{item.points}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
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

    pointsBar: {
        backgroundColor: "#5ca377",
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
    },

    pointsTxt: {
        color: "#F5F0E6",
        fontWeight: "bold",
        fontSize: 16,
    },

    pointsValue: {
        color: "#F5F0E6",
        fontSize: 22,
        fontWeight: "bold",
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
});