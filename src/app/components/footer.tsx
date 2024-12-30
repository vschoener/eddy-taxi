export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Transport Services - Tous droits réservés.
          </p>
        </div>
      </footer>
    );
  }