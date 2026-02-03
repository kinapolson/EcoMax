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
          <View>
            {/* Top 3 Ranking */}
            <View style={styles.topRankingContainer}>
              {/* Rank 2 - Left (Chris Robinson) */}
              <View style={styles.rankCardWrapper}>
                <View style={styles.rankCard2}>
                  <View style={styles.rankProfileArea}>
                    <Text style={styles.rankProfileImage}>{leaderboardUsers[0].image}</Text>
                  </View>
                  <Text style={styles.rankName}>{leaderboardUsers[0].name}</Text>
                  <View style={styles.rankScoreBadge}>
                    <Text style={styles.rankScoreText}>◎ {leaderboardUsers[0].score}</Text>
                  </View>
                </View>
                <View style={[styles.rankBar, { backgroundColor: leaderboardUsers[0].barColor, height: "60%" }]} />
              </View>

              {/* Rank 1 - Center (Jennifer Patterson) */}
              <View style={styles.rankCardWrapper}>
                <View style={styles.rankCard1}>
                  <View style={styles.rankProfileArea}>
                    <Text style={styles.rankProfileImage}>{leaderboardUsers[1].image}</Text>
                  </View>
                  <Text style={styles.rankName}>{leaderboardUsers[1].name}</Text>
                  <View style={styles.rankScoreBadge}>
                    <Text style={styles.rankScoreText}>◎ {leaderboardUsers[1].score}</Text>
                  </View>
                </View>
                <View style={[styles.rankBar, { backgroundColor: leaderboardUsers[1].barColor, height: "100%" }]} />
              </View>

              {/* Rank 3 - Right (James Smith) */}
              <View style={styles.rankCardWrapper}>
                <View style={styles.rankCard3}>
                  <View style={styles.rankProfileArea}>
                    <Text style={styles.rankProfileImage}>{leaderboardUsers[2].image}</Text>
                  </View>
                  <Text style={styles.rankName}>{leaderboardUsers[2].name}</Text>
                  <View style={styles.rankScoreBadge}>
                    <Text style={styles.rankScoreText}>◎ {leaderboardUsers[2].score}</Text>
                  </View>
                </View>
                <View style={[styles.rankBar, { backgroundColor: leaderboardUsers[2].barColor, height: "48%" }]} />
              </View>
            </View>

            {/* Ranks 4-6 List */}
            <View style={styles.restRankingList}>
              {leaderboardUsers.slice(3).map((user, index) => (
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
                  <TouchableOpacity style={styles.listLikeIcon}>
                    <Text style={styles.likeIconText}>{user.rank <= 5 ? "⬆️" : "⬇️"}</Text>
                  </TouchableOpacity>
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

  // Leaderboard Styles
  topRankingContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    marginBottom: 20,
    marginTop: 135,
    paddingHorizontal: 8,
    height: 260,
    gap: 12,
  },

  rankCardWrapper: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    justifyContent: "flex-end",
  },

  rankCard1: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  rankCard2: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  rankCard3: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  rankBar: {
    width: "100%",
    borderRadius: 12,
    minHeight: 80,
  },

  rankProfileArea: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    borderWidth: 2,
    borderColor: "#264e36",
  },

  rankProfileImage: {
    fontSize: 40,
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
    borderRadius: 18,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },

  rankScoreText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#f5f0e6",
  },

  // Rest of Ranking List (4-6)
  restRankingList: {
    gap: 12,
    marginTop: 12,
  },

  listRankCard: {
    backgroundColor: "#5ca377",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  listRankNumber: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: "#264e36",
    justifyContent: "center",
    alignItems: "center",
  },

  listRankNumberText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f5f0e6",
  },

  listUserProfile: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#264e36",
  },

  listProfileImage: {
    fontSize: 24,
  },

  listUserInfo: {
    flex: 1,
  },

  listUserName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#f5f0e6",
  },

  listUserScore: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  listScoreText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#264e36",
  },

  listLikeIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },

  likeIconText: {
    fontSize: 16,
  },
});