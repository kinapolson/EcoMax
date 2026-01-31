import React from 'react';
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ProfileScreen() {
    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <ThemedView style={styles.header} lightColor="#264e36">
                <View />
            </ThemedView>

            {/* Eco points pill */}
            <View style={styles.pointsPillWrapper}>
                <ThemedView style={styles.pointsPill} lightColor="#5ca377">
                    <ThemedText style={styles.pointsPillText}>350</ThemedText>
                </ThemedView>
            </View>

            {/* Profile card */}
            <View style={styles.profileCardWrapper}>
                <ThemedView style={styles.profileCard} lightColor="#5ca377">
                    <View style={styles.avatarRow}>
                        <View style={styles.avatarOuter} />
                    </View>

                    <ThemedText style={styles.name} type="title">
                        James Smith
                    </ThemedText>

                    <View style={styles.statsRow}>
                        <View style={styles.statItem}>
                            <ThemedText style={styles.statLabel}>Lifetime</ThemedText>
                            <ThemedText style={styles.statValue}>1,352</ThemedText>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.statItem}>
                            <ThemedText style={styles.statLabel}>Eco Challenge</ThemedText>
                            <ThemedText style={styles.statValue}>6/7</ThemedText>
                        </View>
                    </View>

                    <View style={styles.iconsRow}>
                        <View style={styles.iconCircle}><ThemedText style={styles.iconText}>📄</ThemedText></View>
                        <View style={styles.iconCircle}><ThemedText style={styles.iconText}>👥</ThemedText></View>
                        <View style={styles.iconCircle}><ThemedText style={styles.iconText}>🏅</ThemedText></View>
                        <View style={styles.iconCircle}><ThemedText style={styles.iconText}>100</ThemedText></View>
                    </View>
                </ThemedView>
            </View>

            {/* Action buttons */}
            <View style={styles.actionsWrapper}>
                <TouchableOpacity style={styles.actionBtn}>
                    <ThemedText style={styles.actionText}>Account Information</ThemedText>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionBtn}>
                    <ThemedText style={styles.actionText}>History</ThemedText>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionBtn}>
                    <ThemedText style={styles.actionText}>Friends</ThemedText>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f0e6',
    },

    header: {
        backgroundColor: '#264e36',
        paddingTop: 64,
        paddingBottom: 120,
        paddingLeft: 20,
    },

    pointsPillWrapper: {
        alignItems: 'center',
        marginTop: -36,
    },

    pointsPill: {
        paddingVertical: 10,
        paddingHorizontal: 28,
        backgroundColor: '#5ca377',
        borderRadius: 14,
        width: '48%',
        alignItems: 'center',
    },

    pointsPillText: {
        color: '#f5f0e6',
        fontSize: 22,
        fontWeight: '700',
    },

    profileCardWrapper: {
        alignItems: 'center',
        marginTop: 50,
    },

    profileCard: {
        width: '86%',
        backgroundColor: '#5ca377',
        borderRadius: 14,
        paddingVertical: 18,
        paddingHorizontal: 16,
        alignItems: 'center',
    },

    avatarRow: {
        marginTop: -48,
        marginBottom: 8,
    },

    avatarOuter: {
        width: 92,
        height: 92,
        borderRadius: 46,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },

    avatar: {
        width: '100%',
        height: '100%',
    },

    name: {
        color: '#f5f0e6',
        marginTop: 6,
        marginBottom: 12,
        fontWeight: '700',
    },

    statsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        marginBottom: 12,
    },

    statItem: {
        alignItems: 'center',
        flex: 1,
    },

    statLabel: {
        color: '#f5f0e6',
        fontSize: 12,
        marginBottom: 6,
    },

    statValue: {
        color: '#f5f0e6',
        fontSize: 24,
        fontWeight: '700',
        marginTop: 4,
        maxWidth: '100%',
        textAlign: 'center',
    },

    divider: {
        width: 1.4,
        backgroundColor: '#f5f0e6',
        height: 40,
        marginHorizontal: 4,
    },

    iconsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#264e36',
        paddingVertical: 10,
        paddingHorizontal: 8,
        width: '100%',
        borderRadius: 10,
    },

    iconCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#264e36',
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.06)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconText: {
        color: '#F5F0E6',
        fontSize: 16,
        fontWeight: '600',
    },

    actionsWrapper: {
        paddingHorizontal: 24,
        marginTop: 50,
        marginBottom: 40,
    },

    actionBtn: {
        backgroundColor: '#a47148',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 12,
        marginBottom: 12,
    },

    actionText: {
        color: '#f5f0e6',
        fontSize: 18,
        fontWeight: '600',
    },
});