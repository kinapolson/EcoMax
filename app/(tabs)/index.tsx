//import { Platform, StyleSheet } from 'react-native';

//import { HelloWave } from '@/components/hello-wave';
import { StyleSheet, View, ScrollView } from "react-native";
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* header */}
      <ThemedView style={styles.header}>
        <ThemedText style={styles.headerTxt}>Hi James!</ThemedText>
      </ThemedView>

      {/* eco points/header status */}
      <View style={styles.cardWrapper}>
        {/* green bkgd */}
        <View style={styles.cardBackground} />

        <ThemedView style={styles.topBox}>
        <View style={styles.topItem}>
          <ThemedText style={styles.smallTxt}>Eco Points</ThemedText>
          <ThemedText style={styles.bigText}>350</ThemedText>
        </View>

        <View style={styles.divider} />

        <View style={styles.topItem}>
          <ThemedText style={styles.smallTxt}>Eco Challenge</ThemedText>
          <ThemedText style={styles.bigText}>6/7</ThemedText>
        </View>
      </ThemedView>
      </View>

      {/* progress bar */}
      <View style={styles.cardWrapper}>
        <View style={styles.cardBackground} />

        <ThemedView style={styles.cardContent}>
          <ThemedText style={styles.cardTitle}>Progress</ThemedText>

          <View style={styles.progressBackground}>
            <View style={styles.progressFill} />
            <ThemedText style={styles.percent}>86%</ThemedText>
          </View>
        </ThemedView>
      </View>

      {/* impact tracker */}
      <View style={styles.cardWrapper}>
        <View style={styles.cardBackground} />

        {/* impact tracker info */}
        <ThemedView style={styles.cardContent}>
          <ThemedText style={styles.cardTitle}>Impact Tracker</ThemedText>

          <View style={styles.chart}>
            <View style={styles.barGroup}>
              <View style={[styles.bar, { height: 30 }]} />
              <ThemedText style={styles.day}>Sun</ThemedText>
            </View>

            <View style={styles.barGroup}>
              <View style={[styles.bar, { height: 70 }]} />
              <ThemedText style={styles.day}>Mon</ThemedText>
            </View>

            <View style={styles.barGroup}>
              <View style={[styles.bar, { height: 55 }]} />
              <ThemedText style={styles.day}>Tue</ThemedText>
            </View>

            <View style={styles.barGroup}>
              <View style={[styles.bar, { height: 100 }]} />
              <ThemedText style={styles.day}>Wed</ThemedText>
            </View>

            <View style={styles.barGroup}>
              <View style={[styles.bar, { height: 40 }]} />
              <ThemedText style={styles.day}>Thu</ThemedText>
            </View>

            <View style={styles.barGroup}>
              <View style={[styles.bar, { height: 75 }]} />
              <ThemedText style={styles.day}>Fri</ThemedText>
            </View>

            <View style={styles.barGroup}>
              <View style={[styles.bar, { height: 65 }]} />
              <ThemedText style={styles.day}>Sat</ThemedText>
            </View>
          </View>
        </ThemedView>
      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f0e6",
  },

  header: {
    paddingVertical: 20,
    backgroundColor: "#264e36",
  },

  headerTxt: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  topBox: {
    backgroundColor: "36db187",
    borderRadius: 10,
    flexDirection: "row",
    padding: 16,
    marginBottom: 20,
  },

  topItem: {
    flex: 1,
    alignItems: "center",
  },

  smallTxt: {
    fontSize: 12,
    color: "#eaf53f",
  },

  bigText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  divider: {
    width: 1,
    backgroundColor: "#d9efe3",
  },

  card: {
    backgroundColor: "36db187",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },

  progressBackground: {
    backgroundColor: "#eaf5ef",
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
  },

  progressFill: {
    position: "absolute",
    height: "100%",
    width: "86%",
    backgroundColor: "#264e36",
    borderRadius: 20,
  },

  percent: {
    alignSelf: "flex-end",
    marginRight: 10,
    fontWeight: "bold",
    color: "#5ca377",
  },

  chart: {
    backgroundColor: "#161618",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 180,
  },

  barGroup: {
    alignItems: "center",
  },

  bar: {
    width: 10,
    backgroundColor: "#5ca377",
    borderRadius: 5,
    marginBottom: 5,
  },

  day: {
    fontSize: 10,
    color: "#FFFFFF",
  },

  cardWrapper: {
    marginBottom: 20,
    position: "relative",
    padding: 10,
  },

  cardBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#5ca377",
    borderRadius: 12,
  },

  cardContent: {
    padding: 16,
    zIndex: 1,
    backgroundColor: "#5ca377",
    borderRadius: 12,
  },

});