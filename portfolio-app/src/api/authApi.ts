import apiClient from './client';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: { username: string };
}

// Demo credentials also accepted locally if the backend isn't running,
// so the app is fully clickable without the server started.
const DEMO_USERNAME = 'demo';
const DEMO_PASSWORD = 'password123';

export async function login({ username, password }: LoginPayload): Promise<LoginResponse> {
  try {
    const { data } = await apiClient.post<LoginResponse>('/auth/login', {
      username,
      password,
    });
    return data;
  } catch (err) {
    if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
      return { token: 'demo-token-offline', user: { username } };
    }
    throw err;
  }
}
