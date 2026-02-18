import { createContext, useState, useContext } from "react";
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
      alert(`${product.name} ditambahkan ke Wishlist!`);
    } else {
      alert("Item ini sudah ada di Wishlist kamu.");
    }
  };

  // Action: Remove from Wishlist
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  // Action: Place Order
  const placeOrder = (product) => {
    const newTransaction = {
      ...product,
      orderId: `ORDER-${Date.now()}`,
      date: new Date().toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    setTransactions([newTransaction, ...transactions]);

    // Jika item dibeli dari wishlist, hapus dari wishlist
    const isInWishlist = wishlist.find((item) => item.id === product.id);
    if (isInWishlist) {
      removeFromWishlist(product.id);
    }

    alert(`Pesanan Berhasil! Menikmati ${product.name}`);
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
