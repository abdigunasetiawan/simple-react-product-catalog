import { useGlobalContext } from "../context/GlobalContext";
import ProductCard from "../components/ProductCard";
import { ArrowRight, Coffee, Clock, Award } from "lucide-react";

const Home = () => {
  const { products } = useGlobalContext();

  const scrollToMenu = () => {
    document
      .getElementById("menu-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="space-y-12">
      {" "}
      {/* Memberikan jarak antar section */}
      {/* 1. HERO SECTION (Banner Style) */}
      <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-3xl text-center text-white shadow-xl">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1200&q=80')",
          }}
        >
          {/* Overlay Gradient agar teks lebih terbaca */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          {/* <span className="mb-4 inline-block rounded-full border border-orange-400/30 bg-orange-500/20 px-3 py-1 text-xs font-bold tracking-widest text-orange-300 uppercase backdrop-blur-sm">
            Brew Haven Signature
          </span> */}
          <h1 className="mb-6 text-4xl leading-tight font-bold text-white drop-shadow-lg md:text-6xl">
            Awaken Your Senses with <br />
            <span className="text-orange-400">Authentic Taste</span>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-gray-200 drop-shadow-md">
            Temukan kenikmatan kopi artisan yang dipadukan dengan suasana
            hangat. Setiap cangkir bercerita tentang kualitas dan dedikasi.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={scrollToMenu}
              className="flex transform items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-orange-700 hover:shadow-orange-600/30"
            >
              Order Now <ArrowRight className="h-5 w-5" />
            </button>
            <button className="rounded-full border border-white/30 bg-white/10 px-8 py-3 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20">
              Our Story
            </button>
          </div>
        </div>
      </div>
      {/* 2. FEATURES SECTION (Transparent Background) */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="border-coffee-100 rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="bg-coffee-50 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
            <Coffee className="text-coffee-600 h-6 w-6" />
          </div>
          <h3 className="text-coffee-900 mb-2 text-lg font-bold">
            Premium Beans
          </h3>
          <p className="text-sm text-gray-500">
            Dipetik dari dataran tinggi terbaik, menjamin aroma dan rasa otentik
            di setiap seduhan.
          </p>
        </div>

        <div className="border-coffee-100 rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="bg-coffee-50 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
            <Clock className="text-coffee-600 h-6 w-6" />
          </div>
          <h3 className="text-coffee-900 mb-2 text-lg font-bold">
            Roast to Order
          </h3>
          <p className="text-sm text-gray-500">
            Kopi kami dipanggang dalam batch kecil setiap hari untuk menjaga
            kesegaran maksimal.
          </p>
        </div>

        <div className="border-coffee-100 rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="bg-coffee-50 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
            <Award className="text-coffee-600 h-6 w-6" />
          </div>
          <h3 className="text-coffee-900 mb-2 text-lg font-bold">
            Master Barista
          </h3>
          <p className="text-sm text-gray-500">
            Disajikan oleh tangan ahli yang mengerti seni dan sains di balik
            kopi yang sempurna.
          </p>
        </div>
      </div>
      {/* 3. CATALOG SECTION */}
      <div id="menu-section" className="pt-8">
        <div className="mb-8 flex flex-col items-end justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-coffee-900 text-3xl font-bold">Our Menu</h2>
            <p className="mt-2 text-gray-500">
              Explore our best selling coffee and pastries.
            </p>
          </div>
          {/* Opsional: Kategori Filter bisa ditambahkan disini nanti */}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
