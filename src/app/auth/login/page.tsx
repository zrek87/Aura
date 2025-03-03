"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/me`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (response.ok) {
          router.push("/dashboard"); // ✅ Redirect to dashboard if logged in
        }
      } catch (error) {
        console.error("User not authenticated");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) return null; // ✅ Prevent flicker while checking authentication

  return <LoginForm />;
}
