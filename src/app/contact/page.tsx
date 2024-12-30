export default function Contact() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gray-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
        <p className="text-lg">
          Nous sommes là pour répondre à vos questions et planifier vos déplacements.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
            Formulaire de Contact
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-12 text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-12 text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 py-3 text-gray-800"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">Nos Coordonnées</h2>
          <p className="text-gray-700 mb-6">
            Vous pouvez également nous contacter directement par téléphone ou email.
          </p>
          <p className="text-gray-700">
            <strong>Téléphone :</strong> <a href="tel:+123456789" className="text-blue-500">+33 6 12 34 56 78</a>
          </p>
          <p className="text-gray-700">
            <strong>Email :</strong> <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>
          </p>
          <p className="text-gray-700">
            <strong>Adresse :</strong> 123 Rue de la Plage, Six-Fours-les-Lones, France
          </p>
        </div>
      </section>
    </div>
  );
}