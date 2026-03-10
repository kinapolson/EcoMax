import { Ionicons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ScanScreen() {
    const cameraRef = useRef<CameraView>(null);
    const [permission, requestPermission] = useCameraPermissions();
    const [loading, setLoading] = useState(false);

    //camera access permission
    if (!permission) {
        return <View style={{ flex: 1, backgroundColor: "#161618" }} />;
    }

    //permission not granted 
    if (!permission.granted) {
        return (
        <View style={styles.center}>
            <Text style={styles.txt}>Camera access is required</Text>
            <TouchableOpacity onPress={requestPermission} style={styles.button}>
            <Text style={styles.buttonTxt}>Grant Permission</Text>
            </TouchableOpacity>
        </View>
        );
    }

    //takes photo, ocr not yet implemented
    const takePicture = async () => {
        if (!cameraRef.current) return;

        setLoading(true);

        try {
        const photo = await cameraRef.current.takePictureAsync({
            quality: 0.7,
        });

        console.log("Photo captured:", photo.uri);
        } catch (error) {
        console.error("Camera error:", error);
        }

        setLoading(false);
    };

    return (
        <View style={styles.container}>
            {/* header */}
            <View style={styles.header}> 
                {/* logo */} 
                <Image source={require('../../assets/images/ecomax_icon_dark.png')} 
                    style={styles.image}
                /> 
            </View>

            {/* cam */}
            <CameraView ref={cameraRef} style={styles.camera} />

            <View style={styles.topbar}>
                <TouchableOpacity style={styles.optBtn} onPress={() => router.back()}>
                    <Ionicons name="close" size={22} color="#F5F0E6" />
                </TouchableOpacity>
                
                 <View style={styles.topRight}>
                    <TouchableOpacity style={styles.optBtn}>
                        <Ionicons name="flash" size={22} color="#F5F0E6" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optBtn}
                        onPress={() => router.push("/tutorial/tp1")}
                    >
                        <Ionicons name="help" size={22} color="#F5F0E6" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* btn overlay */}
            <View style={styles.scanBtn}>
                <TouchableOpacity style={styles.captureBtn} onPress={takePicture}>
                    <Ionicons name="camera" size={28} color="#F5F0E6"></Ionicons>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    //body
    container: {
        flex: 1,
        backgroundColor: "#161618",
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

    //cam
    camera: {
        flex: 1,
    },

    //cam options
    topbar: {
        position: "absolute",
        top: 50,
        left: 20,
        right: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    topRight: {
        flexDirection: "row",
        gap: 12,
    },


    optBtn: {
        width: 34,
        height: 34,
        borderRadius: 18,
        backgroundColor: "#5ca377",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: "#F5F0E6",
        marginTop: 110,
    },

    //cam btn
    scanBtn: {
        position: "absolute",
        bottom: 40,
        alignSelf: "center",
    },

    captureBtn: {
        backgroundColor: "#5ca377",
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 100,
        width: 91,
        height: 91,
        justifyContent: "center",
        borderWidth: 3,
        borderColor: "#F5F0E6",
    },

    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#264e36",
    },

    txt: {
        color: "#F5F0E6",
        fontSize: 16,
        marginBottom: 12,
    },

    button: {
        backgroundColor: "#5ca377",
        padding: 12,
        borderRadius: 10,
    },

    buttonTxt: {
        color: "#F5F0E6",
        fontWeight: "bold",
    },
});