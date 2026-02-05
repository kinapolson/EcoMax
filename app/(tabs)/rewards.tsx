import { TextInput, View, Text, StyleSheet, ScrollView, Pressable, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RewardsScreen() {
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

  const redeemRewards = [
    { id: 1, name: "Target", icon: "●", color: "#ff4444", points: 100, price: 10 },
    { id: 2, name: "Indeu Apothecary", icon: "●", color: "#c9a961", points: 125, price: 10 },
    { id: 3, name: "LÜFKA", icon: "●", color: "#f4e4a6", points: 75, price: 5 },
  ];

  const ecoPoints = 350;
  const currentPoints = 25;

  const leaderboardUsers = [
    { id: 1, name: "Chris Robinson", score: 375, rank: 1, image: "👨", barColor: "#5ca377" },
    { id: 2, name: "Jennifer Patterson", score: 410, rank: 2, image: "👩", barColor: "#c9a961" },
    { id: 3, name: "James Smith", score: 350, rank: 3, image: "👨", barColor: "#7a94a3" },
    { id: 4, name: "Robert Williams", score: 302, rank: 4, image: "👨" },
    { id: 5, name: "Crystal Park", score: 258, rank: 5, image: "👩" },
    { id: 6, name: "Sam Stevenson", score: 250, rank: 6, image: "👩" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/ecomax_icon_dark.png")}
          style={styles.image}
        />
        <Pressable onPress={() => router.back()}>
          <Ionicons name="search" size={24} color="#F5F0E6" />
        </Pressable>
      </View>

      <View style={styles.tabRow}>
        <TouchableOpacity onPress={() => setActiveTab("browse")}>
          <Text style={[styles.tabTxt, activeTab === "browse" && styles.activeTab]}>
            Browse
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("redeem")}>
          <Text style={[styles.tabTxt, activeTab === "redeem" && styles.activeTab]}>
            Redeem
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("leaderboard")}>
          <Text style={[styles.tabTxt, activeTab === "leaderboard" && styles.activeTab]}>
            Leaderboard
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {activeTab === "browse" && (
          <>
            <View style={styles.pointsBar}>
              <Text style={styles.pointsTxt}>Eco Points</Text>
              <Text style={styles.pointsValue}>{ecoPoints}</Text>
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
          </>
        )}

        {activeTab === "redeem" && (
          <>
            <View style={styles.currentPointsDisplay}>
              <Text style={styles.currentPointsText}>◎ {currentPoints}</Text>
            </View>

            <View style={styles.redeemList}>
              {redeemRewards.map((reward) => (
                <View key={reward.id} style={styles.redeemCard}>
                  <View style={styles.redeemIconContainer}>
                    <View style={[styles.redeemIconBox, { backgroundColor: reward.color }]}>
                      <Text style={styles.redeemIcon}>{reward.icon}</Text>
                    </View>
                  </View>

                  <View style={styles.redeemRightContainer}>
                    <View style={styles.redeemDetailsBox}>
                      <Text style={styles.redeemName}>{reward.name}</Text>
                      <View style={styles.redeemPointsPriceRow}>
                        <Text style={styles.redeemPoints}>◎ {reward.points}</Text>
                        <View style={styles.priceTag}>
                          <Text style={styles.priceText}>${reward.price}</Text>
                        </View>
                      </View>
                    </View>

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
          <View>
            <View style={styles.topRankingContainer}>
              {leaderboardUsers.slice(0, 3).map((user, index) => (
                <View key={user.id} style={styles.rankCardWrapper}>
                  <View>
                    <View style={styles.rankProfileArea}>
                      <Text style={styles.rankProfileImage}>{user.image}</Text>
                    </View>
                    <Text style={styles.rankName}>{user.name}</Text>
                    <View style={styles.rankScoreBadge}>
                      <Text style={styles.rankScoreText}>◎ {user.score}</Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.rankBar,
                      { backgroundColor: user.barColor, height: `${100 - index * 20}%` },
                    ]}
                  />
                </View>
              ))}
            </View>

            <View style={styles.restRankingList}>
              {leaderboardUsers.slice(3).map((user) => (
                <View key={user.id} style={styles.listRankCard}>
                  <View style={styles.listRankNumber}>
                    <Text style={styles.listRankNumberText}>{user.rank}</Text>
                  </View>
                  <View style={styles.listUserProfile}>
                    <Text style={styles.listProfileImage}>{user.image}</Text>
                  </View>
                  <View style={styles.listUserInfo}>
                    <Text style={styles.listUserName}>{user.name}</Text>
                  </View>
                  <View style={styles.listUserScore}>
                    <Text style={styles.listScoreText}>◎ {user.score}</Text>
                  </View>
                </View>
              ))}
            </View>
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

  // Redeem tab
  currentPointsDisplay: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 16,
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
    padding: 16,
    flexDirection: "row",
    gap: 12,
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
  },

  redeemIcon: {
    fontSize: 36,
    color: "#F5F0E6",
    fontWeight: "bold",
  },

  redeemRightContainer: {
    flex: 1,
    justifyContent: "space-between",
  },

  redeemDetailsBox: {
    backgroundColor: "#264e36",
    borderRadius: 8,
    padding: 12,
  },

  redeemName: {
    color: "#F5F0E6",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 8,
  },

  redeemPointsPriceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  redeemPoints: {
    color: "#F5F0E6",
    fontSize: 13,
    fontWeight: "bold",
  },

  priceTag: {
    backgroundColor: "#F5F0E6",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },

  priceText: {
    color: "#264e36",
    fontWeight: "bold",
    fontSize: 12,
  },

  redeemButton: {
    backgroundColor: "#264e36",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },

  redeemButtonText: {
    color: "#F5F0E6",
    fontWeight: "bold",
    fontSize: 12,
    letterSpacing: 0.5,
  },

  // Leaderboard
  topRankingContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    height: 260,
    marginBottom: 24,
    marginTop: 40,
  },

  rankCardWrapper: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },

  rankProfileArea: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#264e36",
    marginBottom: 8,
  },

  rankProfileImage: {
    fontSize: 36,
  },

  rankName: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#264e36",
    textAlign: "center",
    marginBottom: 4,
  },

  rankScoreBadge: {
    backgroundColor: "#5ca377",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  rankScoreText: {
    color: "#F5F0E6",
    fontWeight: "bold",
    fontSize: 11,
  },

  rankBar: {
    width: "100%",
    borderRadius: 12,
    marginTop: 8,
  },

  // Ranks 4+
  restRankingList: {
    gap: 12,
  },

  listRankCard: {
    backgroundColor: "#5ca377",
    borderRadius: 12,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  listRankNumber: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#264e36",
    justifyContent: "center",
    alignItems: "center",
  },

  listRankNumberText: {
    color: "#F5F0E6",
    fontWeight: "bold",
    fontSize: 16,
  },

  listUserProfile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#264e36",
  },

  listProfileImage: {
    fontSize: 22,
  },

  listUserInfo: {
    flex: 1,
  },

  listUserName: {
    color: "#F5F0E6",
    fontWeight: "bold",
    fontSize: 14,
  },

  listUserScore: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },

  listScoreText: {
    color: "#264e36",
    fontWeight: "bold",
    fontSize: 12,
  },
});