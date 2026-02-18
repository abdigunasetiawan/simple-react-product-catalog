import { useGlobalContext } from "../context/GlobalContext";
import { Trash2, ShoppingBag, HeartOff } from "lucide-react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, placeOrder, formatRupiah } =
    useGlobalContext();

  if (wishlist.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="mb-4 rounded-full bg-gray-100 p-6">
          <HeartOff className="h-12 w-12 text-gray-400" />
        </div>
        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          Wishlist Kosong
        </h2>
        <p className="mb-6 text-gray-500">
          Belum ada item yang kamu simpan. Yuk jelajahi menu kami!
        </p>
        <Link
          to="/"
          className="bg-coffee-600 hover:bg-coffee-900 rounded-full px-6 py-2 font-medium text-white transition"
        >
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-coffee-900 mb-2 text-3xl font-bold">My Favorites</h1>
      <p className="mb-8 text-gray-500">{wishlist.length} item tersimpan</p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="border-coffee-100 flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="relative h-48">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-2 right-2 rounded-full bg-white/90 p-2 text-red-500 shadow-sm transition hover:bg-red-50"
                title="Hapus dari Wishlist"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-grow flex-col p-4">
              <h3 className="mb-1 font-bold text-gray-800">{item.name}</h3>
              <p className="text-coffee-600 mb-4 font-bold">
                {formatRupiah(item.price)}
              </p>

              <button
                onClick={() => placeOrder(item)}
                className="bg-coffee-600 hover:bg-coffee-900 mt-auto flex w-full items-center justify-center gap-2 rounded-lg py-2 text-white transition"
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
