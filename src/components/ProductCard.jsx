import { Heart, ShoppingBag } from "lucide-react";
import { useGlobalContext } from "../context/GlobalContext";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { addToWishlist, placeOrder, formatRupiah, wishlist } =
    useGlobalContext();
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full rounded-2xl bg-white shadow-sm hover:shadow-2xl dark:bg-gray-900"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800">
        <div className="group relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
          <div className="text-primary-900 dark:text-primary-300 absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold shadow-sm backdrop-blur-md dark:bg-gray-900/90">
            {product.category}
          </div>
        </div>

        <div className="flex flex-grow flex-col p-5">
          <h3 className="mb-2 line-clamp-1 text-lg font-bold text-gray-900 dark:text-gray-100">
            {product.name}
          </h3>
          <p className="mb-4 line-clamp-2 flex-grow text-sm text-gray-500 dark:text-gray-400">
            {product.description}
          </p>

          <div className="mt-auto mb-4 flex items-center justify-between">
            <span className="text-primary-600 dark:text-primary-400 text-lg font-extrabold">
              {formatRupiah(product.price)}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => addToWishlist(product)}
              disabled={isInWishlist}
              className={`flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold transition-colors ${
                isInWishlist
                  ? "cursor-not-allowed bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500"
                  : "bg-primary-50 text-primary-600 hover:bg-primary-100 dark:bg-primary-900/20 dark:text-primary-400 dark:hover:bg-primary-900/40 cursor-pointer"
              }`}
            >
              <Heart
                className={`h-4 w-4 ${isInWishlist ? "fill-gray-400 dark:fill-gray-500" : ""}`}
              />
              {isInWishlist ? "Saved" : "Save"}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => placeOrder(product)}
              className="bg-primary-600 shadow-primary-600/20 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 flex cursor-pointer items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold text-white shadow-md transition-colors dark:text-gray-900"
            >
              <ShoppingBag className="h-4 w-4" /> Order
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
