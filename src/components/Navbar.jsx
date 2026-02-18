import { Link } from "react-router-dom";
import { Coffee, Heart, History, Menu, X } from "lucide-react";
import { useGlobalContext } from "../context/GlobalContext";
import { useState } from "react";

const Navbar = () => {
  const { wishlist } = useGlobalContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-coffee-100 sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <div className="bg-coffee-600 group-hover:bg-coffee-900 rounded-lg p-2 transition">
              <Coffee className="h-6 w-6 text-white" />
            </div>
            <span className="text-coffee-900 text-xl font-bold tracking-tight">
              Brew Haven
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex">
            <Link
              to="/"
              className="hover:text-coffee-600 font-medium text-gray-600 transition"
            >
              Menu
            </Link>

            <Link
              to="/wishlist"
              className="hover:text-coffee-600 relative flex items-center gap-1 font-medium text-gray-600 transition"
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
              className="hover:text-coffee-600 font-medium text-gray-600 transition"
            >
              Orders
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:text-coffee-600 text-gray-600 focus:outline-none"
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

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="border-coffee-100 absolute w-full border-t bg-white shadow-lg md:hidden">
          <div className="space-y-2 px-4 pt-2 pb-4">
            <Link
              to="/"
              className="hover:text-coffee-600 hover:bg-coffee-50 block rounded-md px-3 py-2 text-base font-medium text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              to="/wishlist"
              className="hover:text-coffee-600 hover:bg-coffee-50 block rounded-md px-3 py-2 text-base font-medium text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Favorites ({wishlist.length})
            </Link>
            <Link
              to="/history"
              className="hover:text-coffee-600 hover:bg-coffee-50 block rounded-md px-3 py-2 text-base font-medium text-gray-700"
              onClick={() => setIsMenuOpen(false)}
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
