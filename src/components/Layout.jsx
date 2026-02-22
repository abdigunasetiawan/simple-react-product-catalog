import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-grow px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="mt-auto border-t border-gray-200 bg-white py-8 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="dark:text-primary-500 text-lg font-bold text-gray-900">
            Brew Haven
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Sip, Savor, Repeat.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
