import { useGlobalContext } from "../context/GlobalContext";
import ProductCard from "../components/ProductCard";
import { ArrowRight, Coffee, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { products } = useGlobalContext();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToMenu) {
      setTimeout(() => {
        document
          .getElementById("menu-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const scrollToMenu = () => {
    document
      .getElementById("menu-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="space-y-16 pb-12">
      {/* 1. HERO SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="flex flex-col-reverse items-center gap-10 pt-4 md:flex-row md:gap-16 md:pt-12"
      >
        {/* Text Content (Kiri) */}
        <motion.div
          variants={fadeInUp}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-primary-800 mb-6 text-4xl leading-tight font-extrabold md:text-5xl lg:text-6xl dark:text-white">
            Awaken Your Senses with <br className="hidden lg:block" />
            <span className="text-primary-600 dark:text-primary-500">
              Authentic Taste
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg text-gray-600 md:mx-0 dark:text-gray-300">
            Temukan kenikmatan kopi artisan yang dipadukan dengan suasana
            hangat. Setiap cangkir bercerita tentang kualitas, dedikasi, dan
            gairah kami terhadap kopi.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <motion.button
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={scrollToMenu}
              className="bg-primary-600 shadow-primary-600/20 hover:bg-primary-700 hover:shadow-primary-600/30 dark:bg-primary-500 dark:hover:bg-primary-600 flex cursor-pointer items-center justify-center gap-2 rounded-xl px-8 py-3 font-bold text-white shadow-lg transition-colors hover:shadow-xl"
            >
              Lihat Menu <ArrowRight className="h-5 w-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="cursor-pointer rounded-xl border border-gray-200 bg-white px-8 py-3 font-bold text-gray-900 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              Kisah Kami
            </motion.button>
          </div>
        </motion.div>

        {/* Image Content (Kanan) */}
        <motion.div
          variants={fadeInUp}
          className="relative mx-auto w-full max-w-md flex-1 md:max-w-full"
        >
          <img
            src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80"
            alt="Perfect Coffee"
            className="shadow-primary-900/20 h-[280px] w-full rounded-[2rem] object-cover shadow-2xl sm:h-[350px] md:h-[400px] lg:h-[500px]"
          />
        </motion.div>
      </motion.div>

      {/* 2. FEATURES SECTION */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="rounded-3xl border-y border-gray-200 bg-white/50 py-12 dark:border-gray-800 dark:bg-gray-900/30"
      >
        <div className="grid grid-cols-1 gap-8 px-6 text-center md:grid-cols-3 md:gap-12 md:text-left lg:px-12">
          {[
            {
              icon: Coffee,
              title: "Biji Kopi Premium",
              desc: "Kami menggunakan 100% biji kopi Arabika pilihan yang dipetik langsung dari petani lokal.",
            },
            {
              icon: Sparkles,
              title: "Dipanggang Sempurna",
              desc: "Proses roasting presisi setiap harinya untuk memastikan kesegaran dan aroma maksimal.",
            },
            {
              icon: ShieldCheck,
              title: "Kualitas Terjamin",
              desc: "Disajikan oleh barista ahli yang mengerti seni di balik secangkir kopi yang sempurna.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col items-center gap-4 md:flex-row md:items-start"
            >
              <div className="bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-500 shrink-0 rounded-2xl p-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 3. CATALOG SECTION */}
      <div id="menu-section" className="scroll-mt-24 pt-4">
        <div className="mb-10 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
              Signature Menu
            </h2>
            <div className="bg-primary-500 dark:bg-primary-600 mb-4 h-1 w-20 rounded-full"></div>
            <p className="max-w-2xl text-gray-600 dark:text-gray-400">
              Temukan favorit barumu dari koleksi minuman dan pastry lezat kami.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
