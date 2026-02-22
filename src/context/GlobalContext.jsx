import { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import productData from "../data/products.json";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [products] = useState(productData);
  const [wishlist, setWishlist] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const addToWishlist = (product) => {
    const isExist = wishlist.find((item) => item.id === product.id);
    if (!isExist) {
      setWishlist([...wishlist, product]);
      toast.success(`${product.name} berhasil disimpan!`, {
        style: {
          borderRadius: "10px",
          background: isDarkMode ? "#1f2937" : "#333",
          color: "#fff",
        },
        iconTheme: { primary: "#4ade80", secondary: "#FFFAEE" },
      });
    } else {
      toast.error("Item ini sudah ada di Wishlist!", {
        icon: "⚠️",
        style: {
          borderRadius: "10px",
          background: "#FFF4E5",
          color: "#B45309",
          border: "1px solid #FCD34D",
        },
      });
    }
  };

  const removeFromWishlist = (id) => {
    const itemToRemove = wishlist.find((item) => item.id === id);
    setWishlist(wishlist.filter((item) => item.id !== id));
    if (itemToRemove)
      toast(`${itemToRemove.name} dihapus dari Wishlist`, { icon: "🗑️" });
  };

  const placeOrder = (product) => {
    const newTransaction = {
      ...product,
      orderId: `ORD-${Date.now()}`,
      date: new Date().toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    setTransactions([newTransaction, ...transactions]);

    const isInWishlist = wishlist.find((item) => item.id === product.id);
    if (isInWishlist)
      setWishlist(wishlist.filter((item) => item.id !== product.id));

    toast.success(
      <div>
        <span className="font-bold">Order Berhasil!</span>
        <br />
        <span className="text-sm">Selamat Menikmati {product.name}... ☕</span>
      </div>,
      {
        duration: 4000,
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: { primary: "#713200", secondary: "#FFFAEE" },
      },
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        products,
        wishlist,
        transactions,
        addToWishlist,
        removeFromWishlist,
        placeOrder,
        formatRupiah,
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
