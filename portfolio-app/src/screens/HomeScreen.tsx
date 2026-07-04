import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SafeScreen from '../components/SafeScreen';
import SectionHeader from '../components/SectionHeader';
import SkillBadge from '../components/SkillBadge';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { useAuth } from '../context/AuthContext';
import { profile, skills, projects } from '../data/portfolioData';
import { colors, spacing, typography } from '../theme';
import { isTablet } from '../utils/responsive';

export default function HomeScreen() {
  const { username, logout } = useAuth();

  return (
    <SafeScreen>
      <ScrollView contentContainerStyle={[styles.container, isTablet && styles.containerTablet]}>
        <View style={styles.headerRow}>
          <Text style={styles.greeting}>Hi, {"$j"} 👋</Text>
          <TouchableOpacity onPress={logout} style={styles.logoutBtn}>
            <Ionicons name="log-out-outline" size={22} color={colors.textMuted} />
          </TouchableOpacity>
        </View>

        <View style={styles.profileRow}>
          <Image source={{ uri: profile.avatar }} style={styles.avatar} />
          <View style={{ flex: 1, marginLeft: spacing.md }}>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.role}>{profile.title}</Text>
          </View>
        </View>

        <Text style={styles.tagline}>{profile.tagline}</Text>

        <SectionHeader title="Skills" icon="code-slash-outline" />
        <View style={styles.badgeWrap}>
          {skills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </View>

        <SectionHeader title="Featured Projects" icon="briefcase-outline" />
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        <Button
          label="View All Projects"
          variant="outline"
          icon="arrow-forward-outline"
          onPress={() => {}}
          style={{ marginTop: spacing.sm }}
        />
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  greeting: {
    ...typography.h2,
    color: colors.text,
  },
  logoutBtn: {
    padding: spacing.xs,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.surface,
  },
  name: {
    ...typography.h2,
    color: colors.text,
  },
  role: {
    ...typography.body,
    color: colors.accent,
    marginTop: 2,
  },
  tagline: {
    ...typography.body,
    color: colors.textMuted,
    marginTop: spacing.md,
    lineHeight: 21,
  },
  badgeWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
