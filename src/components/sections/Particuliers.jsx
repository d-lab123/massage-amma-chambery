import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Package } from 'lucide-react';

const TarifsPro = ({ onSelectFormula }) => {
  const plans = [
    {
      title: "Journée Unique",
      price: "520 €",
      tax: "HT / jour",
      features: [
        "1 journée d'intervention (7h de présence)",
        "Votre praticien unique certifié (qualité et confiance constantes)",
        (
          <span key="planning-1" className="block">
            Planning modulable au choix de l'entreprise :
            <span className="block pl-4 mt-1.5 space-y-1 text-xs text-gray-400">
              <span className="block">•  séances de 15 min</span>
              <span className="block">•  séances de 20 min</span>
              <span className="block">•  séances de 30 min</span>
            </span>
          </span>
        )
      ]
    },
    {
      title: "Formule Régulière",
      price: "480 €",
      tax: "HT / jour",
      features: [
        "Engagement de 12 journées par an (1 jour / mois)",
        "Le même praticien chaque mois (pour créer un rituel bien-être avec vos équipes)",
        (
          <span key="planning-2" className="block">
            Planning modulable au choix de l'entreprise :
            <span className="block pl-4 mt-1.5 space-y-1 text-xs text-gray-400">
              <span className="block">•  séances de 15 min</span>
              <span className="block">•  séances de 20 min</span>
              <span className="block">•  séances de 30 min</span>
            </span>
          </span>
        )
      ]
    }
  ];

  return (
    <section id="tarifs" className="py-24 bg-gray-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Nouveaux blocs d'information en haut */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-secondary/10 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
              <Calendar className="text-accent" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Une proposition sur mesure</h4>
              <div className="text-sm text-gray-600 leading-relaxed">
                 <p>Votre entreprise est présente sur plusieurs sites ? <br></br> Je m'adapte Selon vos contraintes et besoins.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-secondary/10 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
              <Package className="text-accent" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">L'apport de tout le matériel nécessaire</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Je me déplace avec tout l'équipement nécessaire et mon principal outil de travail : mes mains.
              </p>
            </div>
          </div>
        </div>

        {/* Cartes de tarifs */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-12 rounded-sm shadow-sm border border-gray-100 text-center flex flex-col items-center"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">{plan.title}</h3>
              
              <div className="flex items-baseline justify-center gap-2 mb-8">
                <span className="text-5xl font-bold text-secondary">{plan.price}</span>
                <span className="text-gray-400 font-medium">{plan.tax}</span>
              </div>

              <a 
                href="#reservation"
                onClick={(e) => {
                  if (onSelectFormula) onSelectFormula(plan.title);
                  e.preventDefault();
                  document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-teal-pro text-white px-12 py-3 rounded-sm font-bold tracking-wider mb-10 hover:opacity-90 transition-opacity inline-block text-center cursor-pointer"
              >
                DEVIS
              </a>

              <ul className="space-y-4 text-left w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-500 text-sm">
                    <CheckCircle2 size={18} className="text-teal-pro shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bloc Offre sur mesure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-12 rounded-sm shadow-sm border border-gray-100 text-center flex flex-col items-center max-w-2xl mx-auto w-full"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">Offre sur mesure.</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-lg">
             Pas besoin d'une journée entière ? Profitez d'une formule sur quelques heures ou sur des créneaux ciblés. 
             Je m'adapte à vos contraintes d'emploi du temps pour offrir une pause bien-être ajustée à vos équipes.
            
           
          </p>
          <a 
            href="#reservation"
            onClick={(e) => {
              if (onSelectFormula) onSelectFormula("Offre sur mesure.");
              e.preventDefault();
              document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-teal-pro text-white px-12 py-3 rounded-sm font-bold tracking-wider hover:opacity-90 transition-opacity inline-block text-center cursor-pointer"
          >
            DEVIS
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TarifsPro;
