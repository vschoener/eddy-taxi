import Image from "next/image";

export default function Services() {
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
          <h1 className="text-4xl font-bold mb-4">Nos Services</h1>
          <p className="text-lg">
            Découvrez les services de transport que nous proposons pour répondre à vos besoins.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-700">Ce que nous offrons</h2>
            <p className="text-gray-700">
              Nous proposons des solutions de transport fiables et adaptées pour tous vos besoins.
            </p>
          </div>

          {/* Service 1: Train Station */}
          <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/images/services-gare.jpg" // Replace with your image path
                alt="Train Station Transport"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-700">Transport vers les gares</h3>
              <p className="text-gray-700">
                Nous assurons des trajets confortables et ponctuels vers les principales gares de
                la région, en vous garantissant une expérience agréable et sans stress.
              </p>
            </div>
          </div>

          {/* Service 2: Airport */}
          <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-700">Transport vers les aéroports</h3>
              <p className="text-gray-700">
                Besoin de vous rendre à l’aéroport ? Nous proposons des transferts fiables et
                ponctuels pour tous vos départs ou arrivées.
              </p>
            </div>
            <div className="flex-shrink-0 order-1 md:order-2">
              <Image
                src="/images/services-avion.webp" // Replace with your image path
                alt="Airport Transport"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Service 3: Medical */}
          <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/images/services-medical.webp" // Replace with your image path
                alt="Medical Transport"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-700">Transport médical</h3>
              <p className="text-gray-700">
                Nous offrons des services de transport pour vos rendez-vous médicaux ou vos besoins
                urgents, en assurant confort et discrétion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">Prêt à réserver votre trajet ?</h2>
          <p className="text-gray-700 mb-6">
            Contactez-nous dès aujourd’hui pour planifier votre prochain déplacement.
          </p>
          <a
            href="/contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Contactez-nous
          </a>
        </div>
      </section>
    </div>
  );
}