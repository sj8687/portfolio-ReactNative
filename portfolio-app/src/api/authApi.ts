import { apiClient } from "./client";

export interface LoginPayload {
  username: string;
  password: string;
}

interface LoginResponse {
  message: string;
}

export async function login({
  username,
  password,
}: LoginPayload): Promise<LoginResponse> {
  const { data } = await apiClient.post<LoginResponse>(
    "/auth/login",
    {
      username,
      password,
    }
  );

  return data;
}