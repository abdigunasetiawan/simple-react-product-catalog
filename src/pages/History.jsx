import { useGlobalContext } from "../context/GlobalContext";
import { ReceiptText, Calendar, Package } from "lucide-react";
import { Link } from "react-router-dom";

const History = () => {
  const { transactions, formatRupiah } = useGlobalContext();

  if (transactions.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="mb-4 rounded-full bg-gray-100 p-6 transition-colors dark:bg-gray-800">
          <ReceiptText className="h-12 w-12 text-gray-400 dark:text-gray-500" />
        </div>
        <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          Belum Ada Pesanan
        </h2>
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          Kamu belum pernah melakukan transaksi. Pesan kopi pertamamu sekarang!
        </p>
        <Link
          to="/"
          className="bg-primary-600 shadow-primary-600/20 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-xl px-8 py-3 font-bold text-white shadow-md transition-all dark:text-gray-900"
        >
          Pesan Sekarang
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        Order History
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        Riwayat perjalanan kopimu.
      </p>

      <div className="space-y-4">
        {transactions.map((trx, index) => (
          <div
            key={index}
            className="flex flex-col justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md md:flex-row md:items-center dark:border-gray-800 dark:bg-gray-900"
          >
            {/* Kiri: Info Produk */}
            <div className="flex items-start gap-4">
              <div className="bg-primary-50 dark:bg-primary-900/20 hidden rounded-xl p-4 sm:block">
                <Package className="text-primary-600 dark:text-primary-500 h-6 w-6" />
              </div>
              <div>
                <p className="mb-1 font-mono text-xs text-gray-400 dark:text-gray-500">
                  #{trx.orderId}
                </p>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {trx.name}
                </h3>
                <p className="mt-1 flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-3 w-3" /> {trx.date}
                </p>
              </div>
            </div>

            {/* Kanan: Harga & Status */}
            <div className="flex items-center justify-between gap-2 md:flex-col md:items-end md:gap-0">
              <span className="text-primary-600 dark:text-primary-400 text-lg font-extrabold">
                {formatRupiah(trx.price)}
              </span>
              <span className="mt-2 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800 dark:bg-green-900/30 dark:text-green-400">
                Success
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
