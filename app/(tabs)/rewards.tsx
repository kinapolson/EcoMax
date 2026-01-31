import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RewardsScreen() {
  const [activeTab, setActiveTab] = useState("browse");

  const favorites = [
    { id: 1, name: "Eco Product 1", points: 25, image: "🌿" },
      { id: 2, name: "Eco Product 2", points: 25, image: "" },
      { id: 3, name: "Eco Product 3", points: 25, image: "" },
  ];

  const previouslyClaimed = [
      { id: 4, name: "Claimed Item 1", points: 25, image: "" },
      { id: 5, name: "Claimed Item 2", points: 25, image: "" },
      { id: 6, name: "Claimed Item 3", points: 25, image: "" },
  ];

  const redeemRewards = [
    { id: 1, name: "Target", icon: "●", color: "#ff4444", points: 100, price: 10 },
    { id: 2, name: "Indeu Apothecary", icon: "●", color: "#c9a961", points: 125, price: 10 },
    { id: 3, name: "LÜFKA", icon: "●", color: "#f4e4a6", points: 75, price: 5 },
  ];

  const ecoPoints = 350;
  const currentPoints = 25;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
          <View />
        <TouchableOpacity style={styles.searchIcon}>
          <Text style={styles.searchText}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabRow}>
        <TouchableOpacity onPress={() => setActiveTab("browse")}>
          <Text
            style={[
              styles.tabTxt,
              activeTab === "browse" && styles.activeTab,
            ]}
          >
            Browse Rewards
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
        {activeTab === "browse" && (
          <>
            {/* Eco Points Banner */}
            <View style={styles.ecoPointsBanner}>
              <Text style={styles.ecoPointsLabel}>Eco Points</Text>
              <Text style={styles.ecoPointsValue}>{ecoPoints}</Text>
            </View>

            {/* Favorites Section */}
            <Text style={styles.sectionLabel}>Favorites</Text>
            <View style={styles.cardGrid}>
              {favorites.map((item) => (
                <View key={item.id} style={styles.cardWrapper}>
                  <TouchableOpacity style={styles.card}>
                    <View style={styles.imageBox}>
                      <Text style={styles.imageText}>{item.image}</Text>
                    </View>
                    <TouchableOpacity style={styles.heartIcon}>
                      <Text style={styles.heartText}>♥</Text>
                    </TouchableOpacity>
                  </TouchableOpacity>
                  <View style={styles.pointsRow}>
                    <Text style={styles.pointsText}>◎ {item.points}</Text>
                  </View>
                </View>
              ))}
            </View>

            {/* Previously Claimed Section */}
            <Text style={styles.sectionLabel}>Previously Claimed</Text>
            <View style={styles.cardGrid}>
              {previouslyClaimed.map((item) => (
                <View key={item.id} style={styles.cardWrapper}>
                  <TouchableOpacity style={styles.card}>
                    <View style={styles.imageBox}>
                      <Text style={styles.imageText}>{item.image}</Text>
                    </View>
                    <TouchableOpacity style={styles.heartIcon}>
                      <Text style={styles.heartText}>♥</Text>
                    </TouchableOpacity>
                  </TouchableOpacity>
                  <View style={styles.pointsRow}>
                    <Text style={styles.pointsText}>◎ {item.points}</Text>
                  </View>
                </View>
              ))}
            </View>
          </>
        )}

        {activeTab === "redeem" && (
          <>
            {/* Current Points Display */}
            <View style={styles.currentPointsDisplay}>
              <Text style={styles.currentPointsText}>◎ {currentPoints}</Text>
            </View>

            {/* Redeem Rewards List */}
            <View style={styles.redeemList}>
              {redeemRewards.map((reward) => (
                <View key={reward.id} style={styles.redeemCard}>
                  {/* Left side - Icon in dark container */}
                  <View style={styles.redeemIconContainer}>
                    <View style={[styles.redeemIconBox, { backgroundColor: reward.color }]}>
                      <Text style={styles.redeemIcon}>{reward.icon}</Text>
                    </View>
                  </View>

                  {/* Right side - Info container */}
                  <View style={styles.redeemRightContainer}>
                    {/* Details row - name, points, price in one container */}
                    <View style={styles.redeemDetailsBox}>
                      <View style={styles.redeemNameSection}>
                        <Text style={styles.redeemName}>{reward.name}</Text>
                        <View style={styles.redeemPointsPriceRow}>
                          <Text style={styles.redeemPoints}>◎ {reward.points}</Text>
                          <View style={styles.priceTag}>
                            <Text style={styles.priceText}>${reward.price}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    {/* Redeem button below */}
                    <TouchableOpacity style={styles.redeemButton}>
                      <Text style={styles.redeemButtonText}>REDEEM</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </>
        )}

        {activeTab === "leaderboard" && (
          <View style={styles.tabContent}>
            <Text style={styles.tabContentText}>Leaderboard coming soon</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f0e6",
  },

  // Header
  header: {
    backgroundColor: "#264e36",
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerIcon: {
    fontSize: 28,
  },

  searchIcon: {
    padding: 8,
  },

  searchText: {
    fontSize: 24,
  },

  // Tab Navigation
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#f5f0e6",
    borderBottomWidth: 1,
    borderBottomColor: "#e0dbd0",
  },

  tabTxt: {
    fontSize: 14,
    color: "#264e36",
    fontWeight: "600",
  },

  activeTab: {
    fontWeight: "bold",
    borderBottomWidth: 3,
    borderBottomColor: "#264e36",
    paddingBottom: 8,
  },

  // Content Area
  content: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  // Eco Points Banner
  ecoPointsBanner: {
    backgroundColor: "#5ca377",
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 24,
    borderRadius: 12,
    alignSelf: "center",
    width: "65%",
    justifyContent: "center",
    alignItems: "center",
  },

  ecoPointsLabel: {
    fontSize: 12,
    color: "#f5f0e6",
    flex: 1,
    textAlign: "center",
  },

  ecoPointsValue: {
    fontSize: 36,
    color: "#f5f0e6",
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },

  // Section Labels
  sectionLabel: {
    backgroundColor: "#a47148",
    color: "#f5f0e6",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    marginBottom: 16,
    fontSize: 16,
    fontWeight: "bold",
  },

  // Card Grid
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  cardWrapper: {
    width: "31%",
    marginBottom: 16,
  },

  card: {
    backgroundColor: "#264e36",
    borderRadius: 10,
    overflow: "hidden",
    aspectRatio: 1,
    position: "relative",
  },

  imageBox: {
    flex: 1,
    backgroundColor: "#f5f0e6",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#264e36",
  },

  imageText: {
    fontSize: 40,
  },

  heartIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#264e36",
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#f5f0e6",
  },

  heartText: {
    fontSize: 16,
    color: "#f5f0e6",
  },

  pointsRow: {
    backgroundColor: "#264e36",
    paddingVertical: 8,
    alignItems: "center",
    marginTop: -3,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  pointsText: {
    color: "#5ca377",
    fontSize: 13,
    fontWeight: "bold",
  },

  // Redeem Tab Styles
  currentPointsDisplay: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
    paddingRight: 4,
  },

  currentPointsText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#264e36",
  },

  redeemList: {
    gap: 16,
  },

  redeemCard: {
    backgroundColor: "#5ca377",
    borderRadius: 12,
    overflow: "hidden",
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    gap: 12,
    position: "relative",
  },

  redeemIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  redeemIconBox: {
    width: 80,
    height: 80,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff4444",
  },

  redeemIcon: {
    fontSize: 40,
    color: "#f5f0e6",
    fontWeight: "bold",
  },

  redeemRightContainer: {
    flex: 1,
    justifyContent: "space-between",
  },

  redeemDetailsBox: {
    backgroundColor: "#264e36",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    flex: 1,
  },

  redeemNameSection: {
    flex: 1,
  },

  redeemName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#f5f0e6",
    marginBottom: 8,
  },

  redeemPointsPriceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  redeemPoints: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#f5f0e6",
  },

  priceTag: {
    backgroundColor: "#f5f0e6",
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  priceText: {
    color: "#264e36",
    fontSize: 13,
    fontWeight: "bold",
  },

  redeemButton: {
    backgroundColor: "#264e36",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },

  redeemButtonText: {
    color: "#f5f0e6",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },

  // Tab Content Placeholders
  tabContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },

  tabContentText: {
    fontSize: 16,
    color: "#264e36",
    fontWeight: "600",
  },
});