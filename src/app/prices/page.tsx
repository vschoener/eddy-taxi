import React from 'react';
import Image from "next/image";


const Tarifs = () => {
  const tarifs = [
    { destination: 'Sanary-sur-Mer', distance: '~5 km', estimation: '24€ - 27€' },
    { destination: 'Gare de Toulon', distance: '~12 km', estimation: '45€ - 80€' },
    { destination: 'Aéroport de Marseille', distance: '~80 km', estimation: '82€ - 280€' },
    { destination: 'Ollioules', distance: '~7 km', estimation: '17€ - 34€' },
    { destination: 'La Seyne-sur-Mer', distance: '~10 km', estimation: '17€ - 40€' },
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          {/*<Image*/}
          {/*  src="/images/services-banner.webp" // Replace with your image path*/}
          {/*  alt="Services Banner"*/}
          {/*  layout="fill"*/}
          {/*  objectFit="cover"*/}
          {/*  className="opacity-70"*/}
          {/*/>*/}
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-64 text-center px-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-100">Tarifs</h1>
        <p className="text-lg text-gray-300">
          Nos tarifs sont basés sur les prix préfectoraux du Var pour l'année 2024, garantissant transparence et équité.
        </p>
        </div>
      </section>

      {/* Table Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">Exemples de Tarifs</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Destination</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Distance</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Estimation du tarif</th>
              </tr>
            </thead>
            <tbody>
              {tarifs.map((tarif, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">{tarif.destination}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">{tarif.distance}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">{tarif.estimation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-700">Besoin d’un devis personnalisé ?</h2>
        <p className="text-gray-700 mb-6">
          Contactez-nous dès aujourd’hui pour discuter de vos besoins spécifiques.
        </p>
        <a
          href="/contact"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Contactez-nous
        </a>
      </section>
    </div>
  );
};

export default Tarifs;