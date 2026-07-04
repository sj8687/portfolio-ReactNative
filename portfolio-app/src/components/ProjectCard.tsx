import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from './Card';
import SkillBadge from './SkillBadge';
import { colors, spacing, typography } from '../theme';
import { Project } from '../data/portfolioData';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={{color:"white"}}>{project.title}</Text>
        {project.link ? (
          <TouchableOpacity onPress={() => Linking.openURL(project.link!)}>
            <Ionicons name="open-outline" size={20} color={colors.accent} />
          </TouchableOpacity>
        ) : null}
      </View>
      <Text style={styles.description}>{project.description}</Text>
      <View style={styles.tagRow}>
        {project.stack.map((tech) => (
          <SkillBadge key={tech} label={tech} />
        ))}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...typography.h3,
    color: colors.text,
    flexShrink: 1,
  },
  description: {
    ...typography.body,
    color: colors.textMuted,
    marginTop: spacing.xs,
    marginBottom: spacing.sm,
    lineHeight: 20,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
