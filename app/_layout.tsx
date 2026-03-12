<<<<<<< HEAD
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Quicksand_400Regular, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';


import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
=======
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useFonts } from 'expo-font';
import { Quicksand_400Regular, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';


import { useColorScheme } from '@/hooks/use-color-scheme';
>>>>>>> 47ec453ca7a8c7ec1c69f2d20268f5ffcc12d84b

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts ({
    Quicksand_400Regular,
    Quicksand_700Bold,
    Poppins_400Regular,
    Poppins_700Bold
  });

  if(!fontsLoaded) {
    return null;
  } 

  
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* auth folder to load first (login/signup) */}
        <Stack.Screen name="(auth)" />

        {/* tabs folder */}
        <Stack.Screen name="(tabs)" />
<<<<<<< HEAD

        {/* badges screen */}
        <Stack.Screen name="badges" />

        {/* modal */}
=======
>>>>>>> 47ec453ca7a8c7ec1c69f2d20268f5ffcc12d84b
        <Stack.Screen name="modal"
          options={{ presentation: 'modal', title: 'Modal' }}
        />
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
