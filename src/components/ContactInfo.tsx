import { Link } from "react-router-dom";

export const ContactInfo = () => {
    return (
        <section className="w-full bg-gray-100 flex flex-col md:flex-row items-center justify-center py-6 shadow-md my-8">
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0 md:mr-8 whitespace-nowrap">
                    Nous contacter
                </h2>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-8 flex-1 justify-center">
                    <p className="flex items-center text-gray-700 mb-2 md:mb-0">
                        <i className="fas fa-map-marker-alt text-red-600 w-6 text-center mr-2"></i>
                        13 Rue de l'Épouvante, 75000 Paris
                    </p>
                    <p className="flex items-center text-gray-700 mb-2 md:mb-0">
                        <i className="fas fa-phone text-red-600 w-6 text-center mr-2"></i>
                        01 23 45 67 89
                    </p>
                    <p className="flex items-center text-gray-700">
                        <i className="fas fa-envelope text-red-600 w-6 text-center mr-2"></i>
                        contact@lamaisonhorrifique.com
                    </p>
                </div>
                <Link
                    to="/contact"
                    className="mt-4 md:mt-0 md:ml-8 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold shadow hover:bg-red-700 transition whitespace-nowrap"
                >
                    Page Contact
                </Link>
            </div>
        </section>
    );
};