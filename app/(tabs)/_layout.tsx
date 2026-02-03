import { Tabs } from "expo-router";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function TabLayout() {
  const [shops, setShops] = useState([
    { id: 1, name: "Indeu Apothecary", points: 25, isFavorite: false },
    { id: 2, name: "Good Fills", points: 25, isFavorite: false },
    { id: 3, name: "Chamberlin's", points: 25, isFavorite: false },
    { id: 4, name: "Green Phantom", points: 25, isFavorite: false },
    { id: 5, name: "LÜFKA", points: 25, isFavorite: false },
    { id: 6, name: "Orlando Cleaners", points: 25, isFavorite: false },
    { id: 7, name: "Origins", points: 25, isFavorite: false },
    { id: 8, name: "Peralta Clothing", points: 25, isFavorite: false },
  ]);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "#264e36",
          height: 70,
          borderTopWidth: 0,
        },

        tabBarBackground: () => {
          return (
            <View
              style={{
                flex: 1,
                backgroundColor: "#264e36",
              }}
            />
          );
        },

        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#F5F0e6",

        tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 6,
        },
      }}
    >

      {/* home */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons
                name="home-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />

      {/* shop */}
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons
                name="cart-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />

      {/* scan */}
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons
                name="camera-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />

      {/* rewards */}
      <Tabs.Screen
        name="rewards"
        options={{
          title: "Rewards",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons
                name="receipt-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />

      {/* profile */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons
                name="person-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}