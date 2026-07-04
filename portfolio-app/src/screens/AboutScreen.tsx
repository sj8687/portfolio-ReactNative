import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SafeScreen from '../components/SafeScreen';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import { profile, experience, socialLinks } from '../data/portfolioData';
import { colors, spacing, typography } from '../theme';
import { isTablet } from '../utils/responsive';

export default function AboutScreen() {
  return (
    <SafeScreen>
      <ScrollView contentContainerStyle={[styles.container, isTablet && styles.containerTablet]}>
        <Text style={styles.title}>About Me</Text>
        <Text style={styles.bio}>{profile.bio}</Text>

        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={16} color={colors.textMuted} />
          <Text style={styles.infoText}>{profile.location}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="mail-outline" size={16} color={colors.textMuted} />
          <Text style={styles.infoText}>{profile.email}</Text>
        </View>

        <SectionHeader title="Experience" icon="time-outline" />
        {experience.map((item) => (
          <Card key={item.id} style={{ marginBottom: spacing.md }}>
            <Text style={styles.role}>{item.role}</Text>
            <Text style={styles.org}>{item.organization} · {item.period}</Text>
            <Text style={styles.summary}>{item.summary}</Text>
          </Card>
        ))}

        <SectionHeader title="Connect" icon="link-outline" />
        <View style={styles.socialRow}>
          {socialLinks.map((link) => (
            <TouchableOpacity
              key={link.id}
              style={styles.socialBtn}
              onPress={() => Linking.openURL(link.url)}
            >
              <Ionicons name={link.icon} size={22} color={colors.primary} />
              <Text style={styles.socialLabel}>{link.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  containerTablet: {
    paddingHorizontal: '10%',
  },
  title: {
    ...typography.h1,
    color: colors.text,
    marginBottom: spacing.md,
  },
  bio: {
    ...typography.body,
    color: colors.textMuted,
    lineHeight: 22,
    marginBottom: spacing.md,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  infoText: {
    ...typography.small,
    color: colors.textMuted,
    marginLeft: spacing.xs,
  },
  role: {
    ...typography.h3,
    color: colors.text,
  },
  org: {
    ...typography.small,
    color: colors.accent,
    marginTop: 2,
    marginBottom: spacing.xs,
  },
  summary: {
    ...typography.body,
    color: colors.textMuted,
    lineHeight: 20,
  },
  socialRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  socialBtn: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
  },
  socialLabel: {
    ...typography.small,
    color: colors.text,
    marginTop: spacing.xs,
  },
});
