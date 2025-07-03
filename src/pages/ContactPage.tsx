import { useState } from 'react';

export const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Formulaire soumis:', formData);
        alert('Merci pour votre message ! Nous vous répondrons dès que possible.');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="max-w-4xl mx-auto my-12 px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Contactez-nous</h1>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-700 mb-8">
                    Vous avez des questions sur nos escape games ou souhaitez réserver une session privée ?
                    Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                Nom complet
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                            Sujet
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                    >
                        Envoyer le message
                    </button>
                </form>

                <div className="mt-12 pt-6 border-t border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Autres moyens de contact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center">
                            <i className="fas fa-map-marker-alt text-red-600 text-2xl mr-4"></i>
                            <div>
                                <h3 className="font-semibold">Adresse</h3>
                                <p className="text-gray-600">13 Rue de l'Épouvante, 75000 Paris</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-phone text-red-600 text-2xl mr-4"></i>
                            <div>
                                <h3 className="font-semibold">Téléphone</h3>
                                <p className="text-gray-600">01 23 45 67 89</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-envelope text-red-600 text-2xl mr-4"></i>
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p className="text-gray-600">contact@lamaisonhorrifique.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};