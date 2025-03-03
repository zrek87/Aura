"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // ✅ Import global auth state

export default function DashboardPage() {
  const router = useRouter();
  const { user, logout } = useAuth(); // ✅ Use global auth state

  useEffect(() => {
    // ✅ Redirect to login if not authenticated
    if (!user) {
      router.push("/auth/login");
    }
  }, [user, router]);

  if (!user) {
    return null; // ✅ Prevent flicker while redirecting
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to Your Dashboard 🚀</h1>
      <p className="text-lg mt-2">
        Logged in as <strong>{user.full_name}</strong> ({user.email})
      </p>
      <button
        className="mt-5 px-4 py-2 bg-red-500 text-white rounded-md"
        onClick={() => {
          logout();
          router.push("/auth/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}
