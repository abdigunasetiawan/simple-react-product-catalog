import { Heart, ShoppingBag } from "lucide-react";
import { useGlobalContext } from "../context/GlobalContext";

const ProductCard = ({ product }) => {
  const { addToWishlist, placeOrder, formatRupiah, wishlist } =
    useGlobalContext();

  // Cek apakah item sudah ada di wishlist untuk styling tombol
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <div className="border-coffee-100 flex h-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="group relative h-48 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="text-coffee-900 absolute top-2 right-2 rounded-full bg-white/80 px-2 py-1 text-xs font-semibold shadow-sm backdrop-blur-sm">
          {product.category}
        </div>
      </div>

      <div className="flex flex-grow flex-col p-4">
        <h3 className="mb-1 line-clamp-1 text-lg font-bold text-gray-800">
          {product.name}
        </h3>
        <p className="mb-3 line-clamp-2 flex-grow text-sm text-gray-500">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-coffee-600 text-lg font-bold">
            {formatRupiah(product.price)}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={() => addToWishlist(product)}
            disabled={isInWishlist}
            className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              isInWishlist
                ? "cursor-not-allowed bg-gray-100 text-gray-400"
                : "bg-orange-50 text-orange-600 hover:bg-orange-100"
            }`}
          >
            <Heart
              className={`h-4 w-4 ${isInWishlist ? "fill-gray-400" : ""}`}
            />
            {isInWishlist ? "Saved" : "Save"}
          </button>

          <button
            onClick={() => placeOrder(product)}
            className="bg-coffee-600 hover:bg-coffee-900 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white transition-colors"
          >
            <ShoppingBag className="h-4 w-4" />
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
