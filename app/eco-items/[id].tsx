import { View, Text, Pressable, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { HeaderBackButton } from "@react-navigation/elements";

export default function BusinessDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const featuredItems = [
    { id: 1, image: require("../../assets/images/items/ia-blue-tansy-body-oil.webp"), points: 25 },
    { id: 2, image: require("../../assets/images/items/ia-tummeric-soap.webp"), points: 25 },
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
        
        <View style={styles.itemThumbCard}>
          <View style={styles.imgWrapper}>
            <View style={styles.ptsBadge}>
              <Ionicons name="leaf" size={25} color="#F5F0E6" />
              <Text style={styles.ptsTxt}>25</Text>
            </View>

            <Image
              source={require("../../assets/images/items/ia-creme-brulee-candle.webp")}
              style={styles.thumbImage}
              resizeMode="cover"
            />
            
            <View style={styles.brandLogoWrap}>
            <Image
              source={require("../../assets/images/logos/ia_logo.avif")}
              style={styles.brandLogo}
              resizeMode="contain"
            />
          </View>
          </View>

          {/* business info card */}
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>Crème Brulé Soy Candle</Text>
            <Text style={styles.price}>$38.95</Text>

            <Text style={styles.itemDescript}>
              Indeu Apothecary offers a hand-poured natural soy candle wax in a glass jar. 
              Scent notes of coconut and caramelized sugar,
              rum and custard, and a vanilla-maple base.
            </Text>
          </View>
        </View>

        {/* similar items */}
        <View style={styles.similarContainer}>
          <Text style={styles.title}>Similar Items</Text>
          <View style={styles.cardTitleDivider} />
          <View style={styles.itemsGrid}>
            {featuredItems.map((business) => (
              <View key={business.id} style={styles.itemCard}>

                <Ionicons
                  name="heart-outline"
                  size={18}
                  color="#264e36"
                  style={styles.heart}
                />

                <Image source={business.image} style={styles.itemImage} />

                <View style={styles.ptsRow}>
                  <Ionicons name="leaf" size={14} color="#264e36" />
                  <Text style={styles.ecoPtsTxt}>{business.points}</Text>
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
    marginTop: 4,
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
  itemThumbCard: {
    backgroundColor: "#A47148",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
  
  thumbImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
  },

  imgWrapper: {
    position: "relative",
  },

  ptsBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    zIndex: 10,
    backgroundColor: "#A47148",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  itemTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F5F0E6",
  },

  itemInfo: {
    marginTop: 12,
  },

  price: {
    fontSize: 18,
    color: "#F5F0E6",
    marginVertical: 6,
  },

  itemDescript: {
    fontSize: 15,
    lineHeight: 22,
    color: "#F5F0E6",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F5F0E6",
  },

  //brand logo placement
  brandLogoWrap: {
    position: "absolute",
    bottom: -30,
    right: 3,
    width: 75,
    height: 75,
    borderRadius: 100,
    backgroundColor: "#5F5D34",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#F5F0E6",
  },

  brandLogo: {
    width: "70%",
    height: "70%",
  },

  //similar items
  similarContainer: {
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
    fontWeight: "bold",
    color: "#F5F0E6",
    fontSize: 25,
  },

  ecoPtsTxt: {
    marginLeft: 4,
    fontWeight: "bold",
    color: "#264e36",
    fontSize: 14,
  },
});