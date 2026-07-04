import { Ionicons } from '@expo/vector-icons';
import { MainTabParamList } from './types';

export interface TabConfigEntry {
  name: keyof MainTabParamList;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconFocused: keyof typeof Ionicons.glyphMap;
}

// Single source of truth for tab labels/icons, referenced explicitly by
// TabNavigator.tsx rather than generated from the filesystem.
export const tabConfig: TabConfigEntry[] = [
  { name: 'Home', label: 'Home', icon: 'home-outline', iconFocused: 'home' },
  { name: 'Search', label: 'Search', icon: 'search-outline', iconFocused: 'search' },
  { name: 'About', label: 'About', icon: 'person-outline', iconFocused: 'person' },
  { name: 'Contact', label: 'Contact', icon: 'mail-outline', iconFocused: 'mail' },
];
