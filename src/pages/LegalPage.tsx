export const LegalPage = () => {
    return (
        <div className="max-w-4xl mx-auto my-12 px-4">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">Mentions légales</h1>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md dark:shadow-gray-700 space-y-8">
                <section>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">1. Éditeur du site</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        <strong className="dark:text-gray-200">La Maison Horrifique SAS</strong><br />
                        Société par actions simplifiée au capital de 50 000 €<br />
                        RCS Paris 123 456 789<br />
                        Siège social : 13 Rue de l'Épouvante, 75000 Paris<br />
                        Téléphone : 01 23 45 67 89<br />
                        Email : contact@lamaisonhorrifique.com<br />
                        Directeur de la publication : Jean Dupont
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">2. Hébergement</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        <strong className="dark:text-gray-200">OVH SAS</strong><br />
                        Siège social : 2 rue Kellermann - 59100 Roubaix - France<br />
                        Téléphone : 1007
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">3. Protection des données personnelles</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        Pour exercer ces droits, veuillez nous contacter à l'adresse email suivante : privacy@lamaisonhorrifique.com
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">4. Propriété intellectuelle</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        L'ensemble des éléments du site (textes, images, vidéos, logos, etc.) sont la propriété exclusive de La Maison Horrifique ou de ses partenaires. Toute reproduction, même partielle, est strictement interdite sans autorisation préalable.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">5. Cookies</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Ce site utilise des cookies pour améliorer l'expérience utilisateur. En naviguant sur ce site, vous acceptez l'utilisation de ces cookies conformément à notre politique de confidentialité.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">6. Responsabilité</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        La Maison Horrifique décline toute responsabilité quant aux éventuels dommages résultant de l'utilisation du site ou des informations qui y sont contenues. Les escape games proposés peuvent présenter des éléments susceptibles de heurter la sensibilité des personnes. La participation se fait sous votre entière responsabilité.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">7. Conditions générales de vente</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Les conditions générales de vente sont disponibles sur demande et consultables lors du processus de réservation.
                    </p>
                </section>
            </div>
        </div>
    );
};