import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavBar = ({ isDark = true, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const navBackground = isDark ? "bg-gray-900/80" : "bg-white/80";
  const mobileMenuBackground = isDark ? "bg-gray-900/80" : "bg-gray-100";

  const navItems = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Experience", href: "#experience" },
    { title: "Projects", href: "#projects" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] ${navBackground} backdrop-blur-md shadow-sm transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#"
            className={`text-2xl font-bold font-figtree ${
              isDark ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Remy
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.title}
                href={item.href}
                animate={{ color: isDark ? "#e5e7eb" : "#1f2937" }}
                whileHover={{
                  color: isDark ? "#818cf8" : "#6366f1",
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 100 }}
                className="font-figtree transition-colors duration-200"
              >
                {item.title}
              </motion.a>
            ))}

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isDark ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              {isDark ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-800" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${mobileMenuBackground} shadow-lg overflow-hidden`}
          >
            <div className="px-4 py-3 space-y-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ color: isDark ? "#e5e7eb" : "#1f2937" }}
                  whileHover={{
                    color: isDark ? "#818cf8" : "#6366f1",
                    scale: 1.05,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="block font-figtree transition-colors duration-200"
                >
                  {item.title}
                </motion.a>
              ))}

              {/* Mobile Theme Toggle */}
              <motion.button
                onClick={() => {
                  toggleTheme();
                  setIsOpen(false);
                }}
                whileHover={{ scale: 1.05 }}
                className={`w-full flex justify-center items-center p-2 rounded-md transition-colors duration-200 ${
                  isDark ? "bg-gray-200" : "bg-gray-700"
                }`}
              >
                {isDark ? (
                  <>
                    <SunIcon className="h-5 w-5 text-yellow-500" />
                    <span className="ml-2 text-black">Light Mode</span>
                  </>
                ) : (
                  <>
                    <MoonIcon className="h-5 w-5 text-gray-200" />
                    <span className="ml-2 text-white">Dark Mode</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
