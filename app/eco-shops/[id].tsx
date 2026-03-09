import { View, Text, Pressable, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { HeaderBackButton } from "@react-navigation/elements";

export default function BusinessDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const featuredItems = [
    { id: 1, image: require("../../assets/images/items/ia-creme-brulee-candle.webp"), points: 25 },
    { id: 2, image: require("../../assets/images/items/ia-blue-tansy-body-oil.webp"), points: 25 },
    { id: 3, image: require("../../assets/images/items/ia-tummeric-soap.webp"), points: 25 },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}> 
        {/* logo and search setup */} 
        <Image source={require('../../assets/images/ecomax_icon_dark.png')} 
          style={styles.image}
        /> 
        <Pressable onPress={() => router.push("/search")}>
          <Ionicons name="search" size={24} color="#F5F0E6" /> 
        </Pressable> 
      </View>
      
      <View style={styles.content}>
        {/* back btn */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back-outline" size={33} color="#264e36" />
        </TouchableOpacity>

        {/* business info card */}
        <View style={styles.infoCard}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>Indeu Apthecary</Text>
            <Ionicons name="person-circle-outline" size={26} color="#F5F0E6" />
          </View>
          
          <View style={styles.cardTitleDivider} />
          
          <View style={styles.addyRow}>
            {/* addy */}
            <Text style={styles.address}>
              520 E Church St Suite 103, {"\n"}
              Orlando, FL 32801
            </Text>

            {/* star rating */}
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={25} color="#F5F0E6" />
              <Ionicons name="star" size={25} color="#F5F0E6" />
              <Ionicons name="star" size={25} color="#F5F0E6" />
              <Ionicons name="star" size={25} color="#F5F0E6" />
              <Ionicons name="star" size={25} color="#F5F0E6" />
            </View>
          </View>

          {/* descript */}
          <Text style={styles.description}>
            Orlando-based, eco-consccious apothecary offering handcrafted soaps, 
            candles, and self-care products. All products from Indeu Apothecary 
            are made with natural ingredients and low waste packaging.
          </Text>
        </View>

        {/* featured items */}
        <View style={styles.featuredContainer}>
          <Text style={styles.title}>Featured Items</Text>
          <View style={styles.cardTitleDivider} />
          <View style={styles.itemsGrid}>
            {featuredItems.map((business) => (
              <View key={business.id} style={styles.itemCard}>

                <Ionicons
                  name="heart-outline"
                  size={18}
                  color="#F5F0E6"s
                  style={styles.heart}
                />

                <Image source={business.image} style={styles.itemImage} />

                <View style={styles.ptsRow}>
                  <Ionicons name="leaf" size={14} color="#1c4964" />
                  <Text style={styles.ptsTxt}>{business.points}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create ({
  //body
  container: {
    flex: 1,
    backgroundColor: "#F5F0E6",
  },

  content: {
    padding: 16,
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

  image: {
    height: 49,
    width: 37,
  },

  //back btn
  backBtn: {
    marginTop: 12,
    marginBottom: 20,
  },
  
  cardTitleDivider: {
    height: 1.6,
    backgroundColor: "#F5F0E6",
    marginVertical: 12,
  },

  //card grid
  itemsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  //card info
  infoCard: {
    backgroundColor: "#A47148",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontFamily: 'Quicksand_700Bold',
    color: "#F5F0E6",
  },

  addyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  address: {
    fontSize: 15,
    color: "#F5F0E6",
    lineHeight: 22,
    fontFamily: 'Poppins_400Regular',
  },

  ratingRow: {
    flexDirection: "row",
  },

  description: {
    fontSize: 15,
    color: "#F5F0E6",
    lineHeight: 22,
    fontFamily: 'Poppins_400Regular',
  },

  //featured items
  featuredContainer: {
    backgroundColor: "#A47148",
    borderRadius: 12,
    padding: 12,
  },

  //item card layout
  itemCard: {
    backgroundColor: "#264e36",
    borderRadius: 10,
    padding: 8,
    marginBottom: 2,
    width: "31%",
    position: "relative",
  },

  heart: {
    position: "absolute",
    top: 6,
    right: 6,
    zIndex: 10,
  },

  itemImage: {
    height: 70,
    width: "100%",
    borderRadius: 6,
    marginBottom: 6,
  },

  ptsRow: {
    backgroundColor: "#F5F0E6",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 4,
  },

  ptsTxt: {
    marginLeft: 4,
    fontFamily: 'Quicksand_700Bold',
    color: "#1c4964",
  },
});