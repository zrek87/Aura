"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ full_name: string; email: string } | null>(
    null
  );

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/me`,
          {
            method: "GET",
            credentials: "include", // ✅ Send cookies with request
          }
        );

        if (!response.ok) {
          throw new Error("Not authenticated");
        }

        const data = await response.json();
        setUser(data.user); // ✅ Set user data
      } catch (error) {
        router.push("/auth/login"); // ✅ Redirect to login if not authenticated
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/logout`, {
        method: "POST",
        credentials: "include", // ✅ Ensure cookies are sent
      });

      router.push("/auth/login"); // ✅ Redirect to login after logout
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to Your Dashboard 🚀</h1>
      {user && (
        <p className="text-lg mt-2">
          Logged in as <strong>{user.full_name}</strong> ({user.email})
        </p>
      )}
      <button
        className="mt-5 px-4 py-2 bg-red-500 text-white rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
