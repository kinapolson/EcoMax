import { View, StyleSheet, Pressable, Text } from "react-native";
import MapView from "react-native-maps";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FullMap() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* header */}
            <SafeAreaView edges={["top"]} style={styles.header}>
                <Pressable onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={35} color="#F5F0E6" />
                </Pressable>
                
                <Text style={styles.title}>Map</Text>
            </SafeAreaView>

            {/* full screen map */}
            <MapView style={styles.map} />
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#264E36",
    },

    map: {
        flex: 1,
    },

    header: {
        backgroundColor: "#264E36",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingBottom: 35,
    },

    backBtn: {
        position: "absolute",
        left: 16,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#F5F0E6",
        marginLeft: 130,
        marginTop: 20,
    },
});