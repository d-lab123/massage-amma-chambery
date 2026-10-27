import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    society: '',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    parking: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const payload = {
      societe: formData.society,
      nom: formData.fullName,
      email: formData.email,
      telephone: formData.phone,
      adresse: formData.address,
      stationnement: formData.parking,
      message: formData.message
    };

    try {
      const response = await fetch('https://sebastien-n8n.duckdns.org/webhook/35086870-4cee-4a31-b1d4-1ba7decf2d4a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          society: '',
          fullName: '',
          email: '',
          phone: '',
          address: '',
          parking: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reservation" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 md:p-16 text-white">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">Réservez votre instant de sérénité</h2>
            <p className="text-white/80 text-lg mb-12 font-light">
               Prêt à prendre soin de vos équipes ? Contactez-moi pour planifier votre séance à Chambéry et ses environs.
            </p>
            
            <div className="space-y-6">
              {[
                "Praticable partout (bureau, domicile, événement)",
                "Se pratique habillé sur chaise ergonomique",
                "Efficacité sur le stress et la fatigue",
                "Format court et adaptable à votre emploi du temps",
                "Un moment de partage et de détente qui renforce la cohésion d'équipe"
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  </div>
                  <p className="text-white/90 font-light leading-snug">{benefit}</p>
                </div>
              ))}
              
              <div className="pt-6 border-t border-white/10 opacity-0 h-0" />
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white p-12 md:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Ligne 1 : Société & Nom Complet */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Société</label>
                  <input 
                    type="text" 
                    name="society" 
                    value={formData.society}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 bg-primary/50 border-none rounded-xl focus:ring-2 focus:ring-secondary/20 outline-none" 
                    placeholder="Votre société *" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Nom complet</label>
                  <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 bg-primary/50 border-none rounded-xl focus:ring-2 focus:ring-secondary/20 outline-none" 
                    placeholder="Votre nom *" 
                  />
                </div>
              </div>

              {/* Ligne 2 : Email & Téléphone */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 bg-primary/50 border-none rounded-xl focus:ring-2 focus:ring-secondary/20 outline-none" 
                    placeholder="Votre email *" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Téléphone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 bg-primary/50 border-none rounded-xl focus:ring-2 focus:ring-secondary/20 outline-none" 
                    placeholder="Votre numéro *" 
                  />
                </div>
              </div>

              {/* Ligne 3 : Adresse d'intervention & Stationnement */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Adresse d'intervention</label>
                  <input 
                    type="text" 
                    name="address" 
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary/50 border-none rounded-xl focus:ring-2 focus:ring-secondary/20 outline-none" 
                    placeholder="Votre adresse" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Stationnement</label>
                  <select 
                    name="parking" 
                    value={formData.parking}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary/50 border-none rounded-xl focus:ring-2 focus:ring-secondary/20 outline-none text-gray-500"
                  >
                    <option value="" disabled>Place de parking disponible ?</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                    <option value="autre">Autre / Zone bleue / À préciser</option>
                  </select>
                </div>
              </div>

              {/* Ligne 4 : Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  className="w-full px-4 py-3 bg-primary/50 border-none rounded-xl focus:ring-2 focus:ring-secondary/20 outline-none resize-none" 
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-secondary text-white rounded-xl font-semibold shadow-lg shadow-secondary/20 hover:bg-secondary/90 transition-all disabled:opacity-75"
              >
                {isSubmitting ? "Envoi en cours..." : "Recevez un devis sous 48 heures"}
              </button>

              {submitStatus === 'success' && (
                <p className="mt-4 text-sm text-green-600 text-center font-medium">
                  Votre demande a bien été envoyée !
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-sm text-red-600 text-center font-medium">
                  Une erreur est survenue, veuillez réessayer.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
