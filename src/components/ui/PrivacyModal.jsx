import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck } from 'lucide-react';

const PrivacyModal = ({ isOpen, onClose }) => {
  // Fermeture avec la touche Échap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Empêcher le défilement de l'arrière-plan quand la modale est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Arrière-plan sombre avec flou */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          {/* Boîte modale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative bg-white w-full max-w-3xl max-h-[85vh] rounded-3xl shadow-2xl z-10 flex flex-col overflow-hidden"
          >
            {/* En-tête de la modale */}
            <div className="flex items-center justify-between p-6 sm:px-8 border-b border-gray-100 bg-primary/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-gray-900">Politique de Confidentialité</h3>
                  <p className="text-xs text-gray-500">Massage Amma Chambéry • Conforme RGPD</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Fermer la fenêtre"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Corps du texte juridique */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-gray-600 leading-relaxed font-light">
              <section>
                <h4 className="text-base font-semibold text-gray-900 mb-2 font-serif">1. Responsable du traitement</h4>
                <p>
                  Le présent site est édité par <strong>Massage Amma Chambéry</strong> (Daniel Quenard), praticien certifié en massage Amma assis, intervenant à Chambéry et en région Auvergne-Rhône-Alpes.
                </p>
                <p className="mt-1">
                  Contact pour toute question relative à vos données : <span className="font-medium text-secondary">contact@massage-amma-chambery.fr</span> (ou via le formulaire de contact du site).
                </p>
              </section>

              <section>
                <h4 className="text-base font-semibold text-gray-900 mb-2 font-serif">2. Données collectées</h4>
                <p>
                  Lorsque vous effectuez une demande de devis ou de réservation sur notre site, les données personnelles suivantes peuvent être collectées :
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>Identité :</strong> Nom complet, nom de l'entreprise ou société.</li>
                  <li><strong>Coordonnées :</strong> Adresse e-mail, numéro de téléphone.</li>
                  <li><strong>Informations d'intervention :</strong> Adresse d'intervention souhaitée, informations sur le stationnement.</li>
                  <li><strong>Contenu du message :</strong> Toute précision ou demande spécifique renseignée dans le champ message.</li>
                </ul>
              </section>

              <section>
                <h4 className="text-base font-semibold text-gray-900 mb-2 font-serif">3. Finalité et utilisation des données</h4>
                <p>
                  Vos données sont collectées uniquement dans le cadre de :
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>La préparation et l'envoi de votre devis personnalisé sous 48 heures.</li>
                  <li>L'organisation pratique et logistique des séances de massage Amma (en entreprise ou à domicile).</li>
                  <li>La réponse à vos demandes d'information et le suivi de la relation client.</li>
                </ul>
                <p className="mt-2 font-medium text-gray-700">
                  Vos données personnelles ne sont jamais vendues, louées ou cédées à des tiers à des fins commerciales.
                </p>
              </section>

              <section>
                <h4 className="text-base font-semibold text-gray-900 mb-2 font-serif">4. Destinataires et outils tiers sécurisés</h4>
                <p>
                  Pour traiter efficacement votre demande dans le respect de votre sécurité, les outils suivants sont utilisés :
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>n8n :</strong> Outil d'automatisation technique permettant l'acheminement sécurisé des réservations.</li>
                  <li><strong>Google Sheets & Google Workspace (Gmail) :</strong> Outils bureautiques sécurisés pour la tenue de l'agenda, l'enregistrement des devis et la communication par e-mail.</li>
                  <li><strong>Hostinger :</strong> Hébergeur du site internet assurant le protocole de chiffrement SSL/HTTPS.</li>
                </ul>
              </section>

              <section>
                <h4 className="text-base font-semibold text-gray-900 mb-2 font-serif">5. Publicité Google Ads et mesure de conversion</h4>
                <p>
                  Ce site utilise la balise officielle <strong>Google Tag (gtag.js)</strong> dans le cadre de campagnes publicitaires Google Ads. Cette balise permet de mesurer anonymement l'efficacité de nos annonces publicitaires lorsqu'une demande de devis est soumise. Aucune donnée nominative de santé n'est transmise à des réseaux publicitaires.
                </p>
              </section>

              <section>
                <h4 className="text-base font-semibold text-gray-900 mb-2 font-serif">6. Durée de conservation</h4>
                <p>
                  Les données transmises lors d'une demande de devis sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter du dernier contact avec le prospect, conformément aux recommandations de la CNIL.
                </p>
              </section>

              <section>
                <h4 className="text-base font-semibold text-gray-900 mb-2 font-serif">7. Vos droits (RGPD)</h4>
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données :
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Droit d'accès et de rectification de vos informations.</li>
                  <li>Droit à l'effacement définitif de vos données (« droit à l'oubli »).</li>
                  <li>Droit à la limitation du traitement et droit d'opposition.</li>
                </ul>
                <p className="mt-2">
                  Pour exercer l'un de ces droits, il vous suffit de nous adresser une demande par e-mail à l'adresse de contact mentionnée ci-dessus.
                </p>
              </section>

              <div className="pt-4 border-t border-gray-100 text-xs text-gray-400">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
              </div>
            </div>

            {/* Pied de la modale */}
            <div className="p-4 sm:px-8 border-t border-gray-100 bg-gray-50 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-secondary text-white rounded-xl text-sm font-semibold hover:bg-secondary/90 transition-all shadow-sm"
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyModal;
