import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import History from "./pages/History";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />

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
