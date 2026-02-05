import { TextInput, View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


export default function SignUpScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => router.push("/(auth)")}>
                    <Ionicons name="chevron-back-outline" size={33} color="#F5F0E6" />
                </Pressable>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Create an Account</Text>
                <Text style={styles.subtitle}>Sign Up to Continue</Text>

                {/* first name */}
                <TextInput
                    placeholder="First Name"
                    placeholderTextColor="#6b6b6b"
                    style={styles.input}
                />

                {/* last name */}
                <TextInput
                    placeholder="Last Name"
                    placeholderTextColor="#6b6b6b"
                    secureTextEntry
                    style={styles.input}
                />

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

                {/* confirm password */}
                <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor="#6b6b6b"
                    secureTextEntry
                    style={styles.input}
                />
                
                {/* login button */}
                <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={() => router.replace("/(tabs)")}
                >
                    <Text style={styles.primaryTxt}>Sign Up</Text>
                </TouchableOpacity>

                {/* sign up link */}
                <TouchableOpacity onPress={() => router.push("/login")}>
                <Text style={styles.footerTxt}>
                    Already have an account? <Text style={styles.link}>Login!</Text>
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
    },
    
    //header back button    
    header: {
        paddingTop: 65,
        paddingLeft: 20,
        paddingBottom: 20,
    },

    //text
    title: {
        fontSize: 32,
        fontFamily: 'Quicksand_700Bold',
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
      fontFamily: 'Poppins_400Regular',
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
        color: "#264E36",
        fontFamily: 'Quicksand_700Bold',
    },

    //signup button
    primaryButton: {
        backgroundColor: "#264E36",
        paddingVertical: 14,
        borderRadius: 7,
        marginTop: 50,
        marginBottom: 10,
        width: "60%",
        alignSelf: "center",
    },

    primaryTxt: {
        color: "#F5F0E6",
        textAlign: "center",
        fontFamily: 'Quicksand_700Bold',
        fontSize: 17,
    },

    //sign up link
    footerTxt: {
        color: "#264E36",
        fontSize: 17,
        textAlign: "center",
        fontFamily: 'Quicksand_400Regular',
    },

    link: {
        fontFamily: 'Quicksand_700Bold',
        textDecorationLine: "underline",
    },
});