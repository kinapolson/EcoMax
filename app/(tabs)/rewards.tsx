import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import MapView from "react-native-maps"

export default function RewardsScreen() {
    const [activeTab, setActiveTab] = useState("browse");
    
    const ecoBusinessesItems = [
        { name: "Indeu Apothecary", points: 25 },
        { name: "Good Fills", points: 25 },
        { name: "Chamberlin's", points: 25 },
    ];

    const claimedItems = [
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
                {/* browse tab */}
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

                {/* redeem tab */}
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

                {/* leaderboard tab */}
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

            {/* browse tab content */}
            {activeTab === "browse" && (
                <>
                    {/* pts status */}
                    <View style={styles.ptsCard}>
                        {/* title */}
                        <Text style={styles.ptsCardTitle}>
                            Eco Points
                        </Text>

                        <Text style={styles.ptsCardTitle}>
                            350
                        </Text>
                    </View>
                    
                    <Text style={styles.categoryLabel}>Favorites</Text>
                    
                    {/* eco buisnesses favorite items grid */}
                    <View style={styles.cardGrid}>
                        {ecoBusinessesItems.map((item, index) => (
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
                            </View>
                        ))}
                    </View>

                    <Text style={styles.categoryLabel}>Previously Claimed</Text>
                    
                    {/* eco buisnesses more items grid */}
                    <View style={styles.cardGrid}>
                        {claimedItems.map((item, index) => (
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
                            </View>
                        ))}
                    </View>
                </>
            )}

            {/* redeem tab content */}
            {activeTab === "redeem" && (
                <>
                    <View style={styles.mapPlaceholder}>
                        <MapView style={styles.map} />
                    </View>
                </>
            )}

            {/* leaderboard tab content */}
            {activeTab === "leaderboard" && (
                <>
                    <View style={styles.mapPlaceholder}>
                        <MapView style={styles.map} />
                    </View>
                </>
            )}
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

    //progress card
    ptsCard: {
        margin: 16,
        padding: 16,
        backgroundColor: "#5ca377",
        borderRadius: 12,
    },

    ptsCardTitle: {
        color: "#F5F0E6",
        fontWeight: "bold",
    },

    //map
    mapPlaceholder: {
        height: 445,
        backgroundColor: "#a47148",
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
        margin: 16,
    },

    map: {
        width: "90%",
        height: "90%",
        borderRadius: 6,
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
        marginLeft: 16,
        marginRight: 16,
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
        marginLeft: 16,
    },
});
