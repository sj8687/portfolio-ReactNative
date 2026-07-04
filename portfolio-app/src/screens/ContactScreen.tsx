import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SafeScreen from '../components/SafeScreen';
import Input from '../components/Input';
import Button from '../components/Button';
import { sendContactMessage } from '../api/contactApi';
import { profile } from '../data/portfolioData';
import { colors, spacing, typography } from '../theme';
import { isTablet } from '../utils/responsive';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  const validate = () => {
    const next: { [k: string]: string } = {};
    if (!name.trim()) next.name = 'Name is required.';
    if (!email.trim()) next.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = 'Enter a valid email.';
    if (!message.trim()) next.message = 'Message cannot be empty.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSend = async () => {
    setStatusMsg(null);
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await sendContactMessage({ name, email, message });
      setStatusMsg(res.message || 'Message sent!');
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    } catch {
      setStatusMsg('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeScreen>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={[styles.container, isTablet && styles.containerTablet]}>
          <Text style={styles.title}>Get In Touch</Text>
          <Text style={styles.subtitle}>
            Have a project in mind? Send a message and I'll get back to you.
          </Text>

          <View style={styles.infoRow}>
            <Ionicons name="mail-outline" size={16} color={colors.textMuted} />
            <Text style={styles.infoText}>{profile.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="call-outline" size={16} color={colors.textMuted} />
            <Text style={styles.infoText}>{profile.phone}</Text>
          </View>

          <View style={styles.form}>
            <Input
              label="Name"
              icon="person-outline"
              placeholder="Your name"
              value={name}
              onChangeText={setName}
              error={errors.name}
            />
            <Input
              label="Email"
              icon="mail-outline"
              placeholder="you@example.com"
              autoCapitalize="none"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              error={errors.email}
            />
            <Input
              label="Message"
              icon="chatbox-ellipses-outline"
              placeholder="Tell me about your project..."
              multiline
              numberOfLines={4}
              style={{ height: 100, textAlignVertical: 'top' }}
              value={message}
              onChangeText={setMessage}
              error={errors.message}
            />

            {statusMsg && <Text style={styles.status}>{statusMsg}</Text>}

            <Button
              label="Send Message"
              icon="send-outline"
              onPress={handleSend}
              loading={loading}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  },
  subtitle: {
    ...typography.body,
    color: colors.textMuted,
    marginTop: spacing.xs,
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
  form: {
    marginTop: spacing.lg,
  },
  status: {
    ...typography.small,
    color: colors.success,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
});
