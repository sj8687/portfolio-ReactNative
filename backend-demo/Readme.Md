# Portfolio Backend Demo

A minimal Express API used by the React Native portfolio app for login and
the contact form. This is a demo/mock backend — swap it for your real one
whenever you're ready (the frontend already talks to it over plain REST).

## Run it

```bash
cd backend-demo
npm install
npm start
```

You should see:
```
✅ Backend demo running at http://localhost:4000
```

## Endpoints

| Method | Path              | Body                                   | Notes                          |
|--------|-------------------|-----------------------------------------|---------------------------------|
| POST   | `/api/auth/login` | `{ "username", "password" }`            | Demo user: `demo` / `password123` |
| POST   | `/api/contact`    | `{ "name", "email", "message" }`        | Logs + stores in memory        |
| GET    | `/api/contact`    | —                                        | Lists submissions (demo only)  |

## Connecting from the app

In `portfolio-app/src/api/client.ts`, `API_BASE_URL` is set to
`http://localhost:4000/api`. Update it based on how you're running the app:

- **iOS Simulator**: `http://localhost:4000/api` (works as-is)
- **Android Emulator**: `http://10.0.2.2:4000/api`
- **Physical device**: `http://<your-computer's-LAN-IP>:4000/api` (phone and
  computer must be on the same Wi-Fi)

## Notes

- Users are stored in `data/users.json` — a flat file, not a database. Fine
  for a demo, not for production.
- The JWT secret in `routes/auth.js` is a placeholder — replace it (and load
  it from an environment variable) before this touches anything real.
- Contact submissions live in memory and reset when the server restarts.
