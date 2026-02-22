import { Link, useLocation } from "react-router-dom";
import { Coffee, Heart, History, Menu, X, Sun, Moon } from "lucide-react";
import { useGlobalContext } from "../context/GlobalContext";
import { useState } from "react";

const Navbar = () => {
  const { wishlist, isDarkMode, toggleDarkMode } = useGlobalContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      document
        .getElementById("menu-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-md transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="group flex items-center gap-2">
            <div className="bg-primary-600 group-hover:bg-primary-700 dark:bg-primary-500 dark:group-hover:bg-primary-600 rounded-lg p-2 transition">
              <Coffee className="h-6 w-6 text-white dark:text-gray-900" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Brew Haven
            </span>
          </Link>

          <div className="hidden items-center space-x-8 md:flex">
            <Link
              to="/"
              state={{ scrollToMenu: true }}
              onClick={handleMenuClick}
              className="hover:text-primary-600 dark:hover:text-primary-400 font-medium text-gray-600 transition dark:text-gray-300"
            >
              Menu
            </Link>
            <Link
              to="/wishlist"
              className="hover:text-primary-600 dark:hover:text-primary-400 relative flex items-center gap-1 font-medium text-gray-600 transition dark:text-gray-300"
            >
              Favorites
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-3 min-w-[18px] rounded-full bg-red-500 px-1.5 py-0.5 text-center text-[10px] font-bold text-white">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link
              to="/history"
              className="hover:text-primary-600 dark:hover:text-primary-400 font-medium text-gray-600 transition dark:text-gray-300"
            >
              Orders
            </Link>

            <button
              onClick={toggleDarkMode}
              className="hover:text-primary-500 dark:hover:text-primary-400 text-gray-500 transition-colors dark:text-gray-400"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="text-gray-500 dark:text-gray-400"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:text-primary-600 text-gray-600 focus:outline-none dark:text-gray-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute w-full rounded-b-3xl border-t border-gray-200 bg-white shadow-xl md:hidden dark:border-gray-800 dark:bg-gray-900">
          <div className="space-y-2 px-4 pt-2 pb-6">
            <Link
              to="/"
              state={{ scrollToMenu: true }}
              onClick={handleMenuClick}
              className="hover:bg-primary-50 hover:text-primary-600 dark:hover:text-primary-400 block rounded-xl px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Menu
            </Link>
            <Link
              to="/wishlist"
              onClick={() => setIsMenuOpen(false)}
              className="hover:bg-primary-50 hover:text-primary-600 dark:hover:text-primary-400 block rounded-xl px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Favorites ({wishlist.length})
            </Link>
            <Link
              to="/history"
              onClick={() => setIsMenuOpen(false)}
              className="hover:bg-primary-50 hover:text-primary-600 dark:hover:text-primary-400 block rounded-xl px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Orders
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
