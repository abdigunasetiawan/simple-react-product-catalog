import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

// Placeholder Pages (Akan kita buat file aslinya nanti)
const Wishlist = () => (
  <div className="py-10 text-center">Halaman Wishlist (Segera Hadir)</div>
);
const History = () => (
  <div className="py-10 text-center">Halaman History (Segera Hadir)</div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
