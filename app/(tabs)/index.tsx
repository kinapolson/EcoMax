//import { Platform, StyleSheet } from 'react-native';

//import { HelloWave } from '@/components/hello-wave';
import { StyleSheet, View, ScrollView } from "react-native";
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const progress = 86;

  return (
    <ScrollView style={styles.container}>

      {/* header */}
      <ThemedView style={styles.header}>
        <ThemedText style={styles.headerTxt}>
          Hi James!
        </ThemedText>
      </ThemedView>

      {/* eco points/header status */}
      <View style={styles.homeCardWrapper}>
        <View style={styles.homeCard}>
          <View style={styles.homeItem}>
            <ThemedText style={styles.homeLabel}>
              Eco Points
            </ThemedText>
            <ThemedText style={styles.homeValue}>
              350
            </ThemedText>
          </View>

          <View style={styles.homeDivider} />

          <View style={styles.homeItem}>
            <ThemedText style={styles.homeLabel}>
              Eco Challenge
            </ThemedText>
            <ThemedText style={styles.homeValue}>
              6/7
            </ThemedText>
          </View>
        </View>
      </View>

      {/* progress bar */}
      <View style={styles.card}>
        <ThemedText style={styles.cardTitle}>
          Progress
        </ThemedText>

        <View style={styles.cardTitleDivider} />

        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill, 
              {width: progress + "%"},
            ]}
          />

          <ThemedText style={styles.progressText}>
            {progress}%
          </ThemedText>
        </View>
      </View>

      {/* impact tracker */}
      <View style={styles.card}>
        <ThemedText style={styles.cardTitle}>
          Impact Tracker
        </ThemedText>
        
        <View style={styles.cardTitleDivider} />

        {/* impact tracker content */}
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
    paddingTop: 80,
    paddingBottom: 65,
    paddingLeft: 20,
  },

  headerTxt: {
    fontSize: 36,
    lineHeight: 44,
    fontFamily: 'Quicksand_700Bold',
    color: "#F5F0E6",
    left: 7.5,
  },

  //card container
  //eco pts/eco challenge card
  homeCardWrapper: {
    alignItems: "center",
    marginTop: -53,
  },

  homeCard: {
    backgroundColor: "#5ca377",
    flexDirection: "row",
    padding: 16,
    borderRadius: 12,
    width: "85%",
  },

  homeItem: {
    flex: 1,
    alignItems: "center",
  },

  homeLabel: {
    fontSize: 14,
    color: "#F5F0E6",
    fontFamily: 'Quicksand_700Bold',
  },

  homeValue: {
    fontSize: 36,
    lineHeight: 44,
    fontFamily: 'Quicksand_700Bold',
    color: "#F5F0E6",
  },

  homeDivider: {
    width: 1.6,
    backgroundColor: "#F5F0E6",
    marginHorizontal: 12,
  },

  //progress and impact trakcker cards
  cardTitleDivider: {
    height: 1.6,
    backgroundColor: "#F5F0E6",
    marginVertical: 14,
  },

  card: {
    backgroundColor: "#5ca377",
    marginVertical: 20,
    alignSelf: "center",
    width: "85%",
    padding: 16,
    borderRadius: 12,
  },

  cardTitle: {
    fontSize: 17,
    fontFamily: 'Quicksand_700Bold',
    color: "#F5F0E6",
  },

  // progress bar
  progressBar: {
    backgroundColor: "#F5F0E6",
    height: 34,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#F5F0E6",
    justifyContent: "center",
    overflow: "hidden",
  },

  progressFill: {
    position: "absolute",
    left: 0,
    height: "100%",
    backgroundColor: "#264e36",
    borderRadius: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },

  progressText: {
    alignSelf: "flex-end",
    marginRight: 12,
    fontWeight: "bold",
    color: "#5ca377",
  },

  //impact tracker
  chart: {
    backgroundColor: "#161618",
    borderRadius: 12,
    height: 180,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  barGroup: {
    alignItems: "center",
  },

  bar: {
    width: 14,
    backgroundColor: "#5ca377",
    borderRadius: 7,
    marginBottom: 6,
  },

  day: {
    fontSize: 15,
    color: "#F5F0E6",
    fontFamily: 'Poppins_400Regular',
  },
});