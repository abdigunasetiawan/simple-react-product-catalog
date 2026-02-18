import { useGlobalContext } from "../context/GlobalContext";
import { ReceiptText, Calendar, Package } from "lucide-react";
import { Link } from "react-router-dom";

const History = () => {
  const { transactions, formatRupiah } = useGlobalContext();

  if (transactions.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="mb-4 rounded-full bg-gray-100 p-6">
          <ReceiptText className="h-12 w-12 text-gray-400" />
        </div>
        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          Belum Ada Pesanan
        </h2>
        <p className="mb-6 text-gray-500">
          Kamu belum pernah melakukan transaksi. Pesan kopi pertamamu sekarang!
        </p>
        <Link
          to="/"
          className="bg-coffee-600 hover:bg-coffee-900 rounded-full px-6 py-2 font-medium text-white transition"
        >
          Pesan Sekarang
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-coffee-900 mb-2 text-3xl font-bold">Order History</h1>
      <p className="mb-8 text-gray-500">Riwayat perjalanan kopimu.</p>

      <div className="space-y-4">
        {transactions.map((trx, index) => (
          <div
            key={index}
            className="border-coffee-100 flex flex-col justify-between gap-4 rounded-xl border bg-white p-6 shadow-sm md:flex-row md:items-center"
          >
            {/* Kiri: Info Produk */}
            <div className="flex items-start gap-4">
              <div className="bg-coffee-50 hidden rounded-lg p-3 sm:block">
                <Package className="text-coffee-600 h-6 w-6" />
              </div>
              <div>
                <p className="mb-1 font-mono text-xs text-gray-400">
                  #{trx.orderId}
                </p>
                <h3 className="text-lg font-bold text-gray-900">{trx.name}</h3>
                <p className="mt-1 flex items-center gap-1 text-sm text-gray-600">
                  <Calendar className="h-3 w-3" /> {trx.date}
                </p>
              </div>
            </div>

            {/* Kanan: Harga & Status */}
            <div className="flex items-center justify-between gap-2 md:flex-col md:items-end md:gap-0">
              <span className="text-coffee-600 text-lg font-bold">
                {formatRupiah(trx.price)}
              </span>
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
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
