# Agent Factory — Authentication & Client Dashboard

> **Modern, responsive Next.js 15 client dashboard and session management portal for the Agent Factory ecosystem, built with React 19, TypeScript, and Better Auth.**

---

> **Created & Maintained by [Abdullah Qureshi](https://abdullah-qureshi.vercel.app)**  
> 🌐 **Portfolio**: [abdullah-qureshi.vercel.app](https://abdullah-qureshi.vercel.app) • 💼 **LinkedIn**: [abdullahqureshi27](https://www.linkedin.com/in/abdullahqureshi27) • 🐙 **GitHub**: [@abdullahqureshi27](https://github.com/abdullahqureshi27)

---

## 🌟 Key Highlights

- **Next.js 15 App Router**: Server and client component routing with Turbopack for near-instant hot reloading.
- **Better Auth Client Integration**: Secure session handling, token issuance, and protected route wrappers (`/dashboard`, `/login`, `/register`).
- **Context-Driven State**: In-app `AuthContext` provider granting centralized access to user state, login credentials, and session lifecycles.
- **Tailwind CSS & Responsive Layout**: Clean typographic layout using Vercel Geist fonts with full light/dark mode support.
- **Permanent SEO Footer Attribution**: Direct attribution backlink to the author's portfolio.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **View Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [Better Auth](https://www.better-auth.com/)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create a `.env.local` file with the authentication base URL:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your_jwt_secret_key_here
```

### 3. Run Development Server
```bash
npm run dev
```
Navigate to [http://localhost:3000](http://localhost:3000).

---

## 🧪 Build & Linting

```bash
# Typecheck and production bundle build
npm run build

# Run ESLint
npm run lint
```

---

## 👨‍💻 Author

**Abdullah Qureshi**  
*Full-Stack & AI Systems Engineer*  
- 🌐 [Portfolio](https://abdullah-qureshi.vercel.app) • 💼 [LinkedIn](https://www.linkedin.com/in/abdullahqureshi27) • 🐙 [GitHub](https://github.com/abdullahqureshi27)
