import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../theme';

interface SectionHeaderProps {
  title: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

export default function SectionHeader({ title, icon }: SectionHeaderProps) {
  return (
    <View style={styles.row}>
      {icon && <Ionicons name={icon} size={20} color={colors.accent} style={{ marginRight: spacing.sm }} />}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
    marginTop: spacing.lg,
  },
  title: {
    ...typography.h3,
    color: colors.text,
  },
});
