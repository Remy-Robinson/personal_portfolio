import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavBar = ({ isDark = true, setIsDark }) => { // Default to dark mode
  const [isOpen, setIsOpen] = useState(false);

  // Initialize and handle theme changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Navbar background colors 
  const navBackground = isDark 
    ? "bg-gray-900/80 text-gray-100" 
    : "bg-white/80 text-gray-900";

  // Mobile menu background
  const mobileMenuBackground = isDark 
    ? "bg-gray-900/80" 
    : "bg-gray-100";

  const navItems = [
    { title: "Home", href: "#" },
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 ${navBackground} backdrop-blur-md shadow-sm transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">


          <a href="#" className={`text-2xl font-bold font-machina ${isDark ? "text-gray-200" : "text-gray-800"}`}>
            Remy
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="hover:text-indigo-500 transition-colors font-machina"
              >
                {item.title}
              </a>
            ))}
            
            {/* Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-md ${
                isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
              } transition-colors`}
            >
              {isDark ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-800" />
              )}
            </button>
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
                <a
                  key={item.title}
                  href={item.href}
                  className={`block ${
                    isDark ? "text-gray-200" : "text-gray-800"
                  } hover:text-indigo-500 transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              ))}
              <button
                onClick={() => {
                  toggleTheme();
                  setIsOpen(false);
                }}
                className={`w-full flex justify-center items-center p-2 rounded-md ${
                  isDark ? "bg-gray-200 hover:bg-gray-300" : "bg-gray-700 hover:bg-gray-600"
                } transition-colors`}
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
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;