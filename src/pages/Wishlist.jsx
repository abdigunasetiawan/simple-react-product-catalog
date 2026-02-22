import { useGlobalContext } from "../context/GlobalContext";
import { Trash2, ShoppingBag, HeartOff } from "lucide-react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, placeOrder, formatRupiah } =
    useGlobalContext();

  if (wishlist.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="mb-4 rounded-full bg-gray-100 p-6 transition-colors dark:bg-gray-800">
          <HeartOff className="h-12 w-12 text-gray-400 dark:text-gray-500" />
        </div>
        <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          Wishlist Kosong
        </h2>
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          Belum ada item yang kamu simpan. Yuk jelajahi menu kami!
        </p>
        <Link
          to="/"
          className="bg-primary-600 shadow-primary-600/20 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-xl px-8 py-3 font-bold text-white shadow-md transition-all dark:text-gray-900"
        >
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        My Favorites
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        {wishlist.length} item tersimpan
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="relative h-48 bg-gray-100 dark:bg-gray-800">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-3 right-3 cursor-pointer rounded-full bg-white/90 p-2 text-red-500 shadow-sm backdrop-blur-md transition hover:bg-red-50 dark:bg-gray-900/90 dark:hover:bg-red-900/30"
                title="Hapus dari Wishlist"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-grow flex-col p-5">
              <h3 className="mb-2 font-bold text-gray-900 dark:text-gray-100">
                {item.name}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 mb-4 font-extrabold">
                {formatRupiah(item.price)}
              </p>

              <button
                onClick={() => placeOrder(item)}
                className="bg-primary-600 shadow-primary-600/20 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 mt-auto flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold text-white shadow-md transition-all dark:text-gray-900"
              >
                <ShoppingBag className="h-4 w-4" /> Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
