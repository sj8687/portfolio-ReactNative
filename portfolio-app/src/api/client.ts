import axios from 'axios';

// When you run the backend-demo Express server locally, point this at it.
// - iOS simulator: http://localhost:4000
// - Android emulator: http://10.0.2.2:4000
// - Physical device: http://<your-computer-LAN-IP>:4000
export const API_BASE_URL = 'http://localhost:4000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
