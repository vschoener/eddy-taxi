import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/six-fours-banner.jpeg" // Replace with your image path
            alt="Six-Fours-les-Lones"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bienvenue à Six-Fours-les-Lones Transport
          </h1>
          <p className="text-lg md:text-2xl">
            Services de transport fiables pour les gares, les aéroports et les besoins médicaux.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/images/tesla-driver.jpg" // Replace with your image path
              alt="Client et véhicule"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-700">À propos de nous</h2>
            <p className="text-gray-700">
              Nous fournissons des services de transport sûrs et confortables dans la belle région de Six-Fours-les-Lones. Que vous voyagiez vers une gare, un aéroport ou que vous ayez besoin de transport médical, nous sommes là pour vous aider.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-700">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-700">Transport vers les gares</h3>
              <p className="text-gray-700">
                Nous offrons des transferts fiables vers les gares à proximité.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-700">Transport vers les aéroports</h3>
              <p className="text-gray-700">
                Des trajets sûrs et ponctuels vers tous les grands aéroports de la région.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-700">Transport médical</h3>
              <p className="text-gray-700">
                Transport confortable pour les rendez-vous médicaux et les urgences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">Contactez-nous</h2>
          <p className="text-gray-700 mb-6">
            Vous avez des questions ou souhaitez réserver un trajet ? Contactez-nous dès aujourd’hui !
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a
              href="tel:+123456789"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Appelez-nous
            </a>
            <a
              href="mailto:info@example.com"
              className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition"
            >
              Envoyez-nous un email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}