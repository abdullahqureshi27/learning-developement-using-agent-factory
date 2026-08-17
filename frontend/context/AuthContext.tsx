// ==============================Manual Axios with Refresh Logic (Old)=========================
// context/AuthContext.tsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { User } from "@/types/auth";
import api from "@/lib/api";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const loadUser = async () => {
    try {
      console.log("req sent to auth/me");
      const res = await api.get("/auth/me");
      console.log("the user in the load user at initial is", res);
      setUser(res.data);
      router.push("/dashboard"); // Redirect to dashboard after successful login
    } catch (err: any) {
      // 401 is expected when not logged in - silent fail
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      console.log("the user already exist isn the useeffect", user);
      setIsLoading(false);
      return;
    }
    console.log("useeffect is run and the loaduser also runs");
    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    const res = await api.post("/auth/login", { email, password });
    localStorage.setItem("access_token", res.data.access_token);
    localStorage.setItem("refresh_token", res.data.refresh_token);
    console.log("the res in the login is :", res);
    setUser(res.data.user);
  };

  const logout = async () => {
    await api.post("/auth/logout");
    setUser(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};

// // context/AuthContext.tsx
// provide the authentication all over the app using createContext - react hook
// =======================better auth setup=======================
// 'use client';

// import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
// import { User } from '@/types/auth';
// import { authClient } from '@/lib/auth-client';

// interface AuthContextType {
//   user: User | null;
//   isLoading: boolean;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const loadUser = async () => {
//     const { data } = await authClient.getSession();
//     setUser(data?.user || null);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const login = async (email: string, password: string) => {
//     await authClient.signIn.email({ email, password });
//     await loadUser();   // refresh user
//   };

//   const logout = async () => {
//     await authClient.signOut();
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, isLoading, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error('useAuth must be used inside AuthProvider');
//   return context;
// };

