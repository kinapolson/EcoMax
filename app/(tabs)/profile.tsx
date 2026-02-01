import { StyleSheet, View, Text, ScrollView } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

export default function ProfileScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.homeCardWrapper}>
                    <View style={styles.homeCard}>
                        <Text style={styles.title}>
                            James Smith
                        </Text>

                        <View style={styles.statsRow}>
                            <View style={styles.homeItem}>
                                <Text style={styles.homeLabel}>Lifetime</Text>
                                <Text style={styles.homeValue}>1,352</Text>
                            </View>

                            <View style={styles.homeDivider} />

                            <View style={styles.homeItem}>
                                <Text style={styles.homeLabel}>Eco Challenge</Text>
                                <Text style={styles.homeValue}>6/7</Text>
                            </View>
                        </View>
                        
                        <View style={styles.badgeRow}>
                            <View style={styles.badge}>
                                <MaterialCommunityIcons
                                    name="file-document-outline"
                                    size={220}
                                    color="#F5F0E6"
                                />
                            </View>

                            <View style={styles.badge}>
                                <Feather
                                    name="users"
                                    size={22}
                                    color="#F5F0E6"
                                />
                            </View>

                            <View style={styles.badge}>
                                <MaterialCommunityIcons
                                    name="medal-outline"
                                    size={220}
                                    color="#F5F0E6"
                                />
                            </View>

                            <View style={styles.badge}>
                                <MaterialCommunityIcons
                                    name="leaf"
                                    size={220}
                                    color="#F5F0E6"
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    //body
    container: {
        backgroundColor: "#f5f0e6",
    },
    
    //header
    header: {
        backgroundColor: "#264e36",
        paddingBottom: 1,
        paddingTop: 80,
    },

    //prof card
    title: {
        fontSize: 32,
        color: "#F5F0E6", 
        fontWeight: "bold",
    },

    statsRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 12,
    },

    homeDivider: {
        width: 1.6,
        height: 50,
        backgroundColor: "#F5F0E6",
        marginHorizontal: 12,
    },

    homeCardWrapper: {
        alignItems: "center",
        marginTop: -53,
    },

    homeCard: {
        backgroundColor: "#5ca377",
        padding: 16,
        borderRadius: 15,
        marginTop: 110,
        width: "85%",
        alignItems: "center",
    },

    homeItem: {
        alignItems: "center",
    },

    homeLabel: {
        fontSize: 12,
        color: "#F5F0E6",
    },

    homeValue: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#F5F0E6",
    },

    badgeRow: {
        flexDirection: "row",
        marginTop: 16,
        backgroundColor: "#4b8f66",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 14,
    },

    badge: {
        backgroundColor: "#5ca377",
        width: 44,
        height: 44,
        borderRadius: 22,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 8,
    },
});