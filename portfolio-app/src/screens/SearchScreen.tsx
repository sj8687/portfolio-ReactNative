import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import SafeScreen from '../components/SafeScreen';
import Input from '../components/Input';
import ProjectCard from '../components/ProjectCard';
import SkillBadge from '../components/SkillBadge';
import SectionHeader from '../components/SectionHeader';
import { projects, skills } from '../data/portfolioData';
import { colors, spacing, typography } from '../theme';

export default function SearchScreen() {
  const [query, setQuery] = useState('');

  const filteredProjects = useMemo(() => {
    if (!query.trim()) return projects;
    const q = query.toLowerCase();
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q))
    );
  }, [query]);

  const filteredSkills = useMemo(() => {
    if (!query.trim()) return skills;
    return skills.filter((s) => s.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <SafeScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Search</Text>
        <Input
          icon="search-outline"
          placeholder="Search projects or skills..."
          value={query}
          onChangeText={setQuery}
          autoCapitalize="none"
        />

        <FlatList
          data={filteredProjects}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <>
              {filteredSkills.length > 0 && (
                <>
                  <SectionHeader title="Matching Skills" icon="pricetags-outline" />
                  <View style={styles.badgeWrap}>
                    {filteredSkills.map((s) => (
                      <SkillBadge key={s} label={s} />
                    ))}
                  </View>
                </>
              )}
              <SectionHeader title="Matching Projects" icon="folder-open-outline" />
            </>
          }
          renderItem={({ item }) => <ProjectCard project={item} />}
          ListEmptyComponent={
            <Text style={styles.empty}>No results found for "{query}".</Text>
          }
          contentContainerStyle={{ paddingBottom: spacing.xxl }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  title: {
    ...typography.h1,
    color: colors.text,
    marginBottom: spacing.md,
  },
  badgeWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  empty: {
    ...typography.body,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: spacing.xl,
  },
});
