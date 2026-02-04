import React, { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const FRIENDS_DATA = [
    {
        id: '1',
        name: 'Robert Williams',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        id: '2',
        name: 'Crystal Park',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        id: '3',
        name: 'Sam Stevenson',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
        id: '4',
        name: 'Jennifer Patterson',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
        id: '5',
        name: 'Chris Robinson',
        avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
];

export default function ProfileScreen() {
    const [showFriends, setShowFriends] = useState(false);

    if (showFriends) {
        return (
            <View style={styles.friendsContainer}>
                {/* Header with eco icon */}
                <ThemedView style={styles.friendsHeader} lightColor="#264e36">
                    <Image
                        source={require('@/assets/images/ecomax_icon_light.png')}
                        style={styles.headerIcon}
                        resizeMode="contain"
                    />
                </ThemedView>

                {/* Content area */}
                <View style={styles.friendsContent}>
                    {/* Title row with back button and add button */}
                    <View style={styles.titleRow}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => setShowFriends(false)}
                        >
                            <Ionicons name="chevron-back" size={28} color="#264e36" />
                        </TouchableOpacity>

                        <ThemedText style={styles.friendsTitle}>Friends</ThemedText>

                        <TouchableOpacity style={styles.addButton}>
                            <View style={styles.addButtonCircle}>
                                <Ionicons name="add" size={20} color="#264e36" />
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Friends list */}
                    <ScrollView
                        style={styles.listContainer}
                        showsVerticalScrollIndicator={false}
                    >
                        {FRIENDS_DATA.map((friend) => (
                            <TouchableOpacity key={friend.id} style={styles.friendCard}>
                                <View style={styles.friendAvatarContainer}>
                                    <Image
                                        source={{ uri: friend.avatar }}
                                        style={styles.friendAvatar}
                                    />
                                </View>
                                <ThemedText style={styles.friendName}>{friend.name}</ThemedText>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </View>
        );
    }

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

                <TouchableOpacity style={styles.actionBtn} onPress={() => setShowFriends(true)}>
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

    // Friends view styles
    friendsContainer: {
        flex: 1,
        backgroundColor: '#f5f0e6',
    },

    friendsHeader: {
        backgroundColor: '#264e36',
        paddingTop: 50,
        paddingBottom: 20,
        paddingLeft: 16,
    },

    headerIcon: {
        width: 40,
        height: 40,
    },

    friendsContent: {
        flex: 1,
        backgroundColor: '#f5f0e6',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        marginTop: -20,
        paddingTop: 20,
    },

    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 16,
    },

    backButton: {
        padding: 4,
    },

    friendsTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#264e36',
        flex: 1,
        textAlign: 'center',
    },

    addButton: {
        padding: 4,
    },

    addButtonCircle: {
        width: 28,
        height: 28,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: '#264e36',
        justifyContent: 'center',
        alignItems: 'center',
    },

    listContainer: {
        flex: 1,
        paddingHorizontal: 24,
    },

    friendCard: {
        backgroundColor: '#5ca377',
        borderRadius: 14,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },

    friendAvatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        overflow: 'hidden',
        marginRight: 16,
    },

    friendAvatar: {
        width: '100%',
        height: '100%',
    },

    friendName: {
        color: '#f5f0e6',
        fontSize: 18,
        fontWeight: '600',
    },
});