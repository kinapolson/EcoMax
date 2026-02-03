import { TextInput, View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => router.back()}>
                    <Ionicons name="chevron-back-outline" size={24} color="#F5F0E6" />
            </Pressable>
            <View style={styles.card}>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.subtitle}>Welcome Back!</Text>

                {/* email */}
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#6b6b6b"
                    style={styles.input}
                />

                {/* password */}
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#6b6b6b"
                    secureTextEntry
                    style={styles.input}
                />
                
                {/* login button */}
                <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={() => router.replace("/(tabs)")}
                >
                    <Text style={styles.primaryTxt}>Login</Text>
                </TouchableOpacity>

                {/* sign up link */}
                <TouchableOpacity onPress={() => router.push("/signup")}>
                <Text style={styles.footerTxt}>
                    Don't have an account? <Text style={styles.link}>Sign Up!</Text>
                </Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    //body
    container: {
        flex: 1,
        backgroundColor: "#264E36",
        paddingTop: 120,
        alignItems: "center",
    },

    //text
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#264E36",
        marginTop: 27,
        marginBottom: 5,
        marginLeft: 1,
    },

    subtitle : {
      fontSize: 20,
      color: "#264E36", 
      marginBottom: 40,
      marginLeft: 1,

    },

    //cream sand container
    card: {
        backgroundColor: "#F5F0E6",
        width: "100%",
        padding: 30,
        paddingBottom: 325,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: 40,
    },

    //text field inputs
    input: {
        backgroundColor: "transparent",
        borderBottomWidth: 2,
        borderBottomColor: "#264E36",
        paddingVertical: 14,
        paddingHorizontal: 14,
        fontSize: 17,
        marginBottom: 14,
        color: "#364E36",
        fontWeight: "bold",
    },

    //login button
    primaryButton: {
        backgroundColor: "#264E36",
        paddingVertical: 14,
        borderRadius: 7,
        marginTop: 90,
        marginBottom: 10,
        width: "60%",
        alignSelf: "center",
    },

    primaryTxt: {
        color: "#F5F0E6",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 17,
    },

    //sign up link
    footerTxt: {
        color: "#264E36",
        fontSize: 17,
        textAlign: "center",
    },

    link: {
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
});