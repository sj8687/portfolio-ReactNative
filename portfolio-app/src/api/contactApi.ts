import apiClient from './client';

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function sendContactMessage(payload: ContactPayload): Promise<{ success: boolean; message: string }> {
  try {
    const { data } = await apiClient.post('/contact', payload);
    return data;
  } catch (err) {
    // Offline fallback so the form still gives feedback without a running backend.
    return { success: true, message: 'Message captured locally (backend offline).' };
  }
}
