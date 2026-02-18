import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast"; // Import toast
import productData from "../data/products.json";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [products] = useState(productData);
  const [wishlist, setWishlist] = useState([]);
  const [transactions, setTransactions] = useState([]);

  // Helper: Format Rupiah
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  // Action: Add to Wishlist
  const addToWishlist = (product) => {
    const isExist = wishlist.find((item) => item.id === product.id);

    if (!isExist) {
      setWishlist([...wishlist, product]);
      // Ganti alert dengan toast.success
      toast.success(`${product.name} berhasil disimpan!`, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        iconTheme: {
          primary: "#4ade80", // Warna hijau terang
          secondary: "#FFFAEE",
        },
      });
    } else {
      // Ganti alert dengan toast.error (atau custom icon)
      toast.error("Item ini sudah ada di Wishlist!", {
        icon: "⚠️", // Kita pakai icon warning
        style: {
          borderRadius: "10px",
          background: "#FFF4E5",
          color: "#B45309",
          border: "1px solid #FCD34D",
        },
      });
    }
  };

  // Action: Remove from Wishlist
  const removeFromWishlist = (id) => {
    const itemToRemove = wishlist.find((item) => item.id === id);
    setWishlist(wishlist.filter((item) => item.id !== id));

    // Optional: Toast saat dihapus
    if (itemToRemove) {
      toast(`${itemToRemove.name} dihapus dari Wishlist`, {
        icon: "🗑️",
      });
    }
  };

  // Action: Place Order
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

    // Jika item dibeli dari wishlist, hapus dari wishlist tanpa toast tambahan
    const isInWishlist = wishlist.find((item) => item.id === product.id);
    if (isInWishlist) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    }

    // Ganti alert dengan toast.success custom
    toast.success(
      <div>
        <span className="font-bold">Order Berhasil!</span>
        <br />
        <span className="text-sm">Selamat Menikmati {product.name}... ☕</span>
      </div>,
      {
        duration: 4000, // Tampil selama 4 detik
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
