import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-coffee-50 flex min-h-screen flex-col font-sans text-gray-900">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-grow px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="border-coffee-100 mt-auto border-t bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-coffee-900 font-semibold">Brew Haven</p>
          <p className="mt-1 text-sm text-gray-500">Sip, Savor, Repeat.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
