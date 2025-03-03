"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react"; // ✅ Use Lucide Icons

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<{ full_name: string; email: string } | null>(
    null
  );
  const router = useRouter();

  // ✅ Check if user is logged in
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
          const data = await response.json();
          setUser(data.user);
        }
      } catch (error) {
        setUser(null); // Not logged in
      }
    };

    checkAuth();
  }, []);

  // ✅ Handle logout
  const handleLogout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/logout`, {
      method: "POST",
      credentials: "include",
    });

    setUser(null);
    router.push("/auth/login");
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Aura logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Aura
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-grow mx-4">
            <form className="relative w-full max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 pl-4 pr-10 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="absolute right-3 top-2 text-gray-500 dark:text-gray-400"
              >
                <Search size={18} />
              </button>
            </form>
          </div>

          {/* Contact & Authentication */}
          <div className="flex items-center space-x-6">
            <a
              href="tel:1234567890"
              className="text-sm text-gray-500 dark:text-white hover:underline"
            >
              (123) 456-7890
            </a>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/dashboard"
                  className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-sm text-red-500 hover:underline"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-500 dark:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} p-4`}>
          <form className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pl-4 pr-10 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-3 top-2 text-gray-500 dark:text-gray-400"
            >
              <Search size={18} />
            </button>
          </form>
        </div>
      </nav>

      {/* Bottom Navigation Bar */}
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium space-x-8 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/company"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
