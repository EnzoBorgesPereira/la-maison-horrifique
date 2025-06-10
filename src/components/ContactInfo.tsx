export const ContactInfo = () => {
    return (
        <section className="contact-info bg-gray-100 p-8 rounded-lg shadow-md max-w-md mx-auto my-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Nous contacter</h2>
            <address className="not-italic">
                <p className="flex items-center text-gray-700 mb-3">
                    <i className="fas fa-map-marker-alt text-red-600 w-6 text-center mr-2"></i>
                    13 Rue de l'Épouvante, 75000 Paris
                </p>
                <p className="flex items-center text-gray-700 mb-3">
                    <i className="fas fa-phone text-red-600 w-6 text-center mr-2"></i>
                    01 23 45 67 89
                </p>
                <p className="flex items-center text-gray-700">
                    <i className="fas fa-envelope text-red-600 w-6 text-center mr-2"></i>
                    contact@lamaisonhorrifique.com
                </p>
            </address>
        </section>
    );
};