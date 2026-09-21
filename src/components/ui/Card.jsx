import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, price, description, features, highlighted = false }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`p-8 rounded-3xl border ${highlighted ? 'border-secondary bg-white shadow-xl shadow-secondary/5' : 'border-gray-100 bg-white shadow-sm'} flex flex-col h-full`}
    >
      <div className="mb-6">
        <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">{title}</h3>
        {price && (
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-secondary">{price}</span>
            <span className="text-gray-500 text-sm">/ séance</span>
          </div>
        )}
      </div>
      <p className="text-gray-600 mb-8 font-light leading-relaxed flex-grow">
        {description}
      </p>
      {features && (
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="w-1 h-1 bg-accent rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      <button className={`w-full py-3 rounded-full font-medium transition-all ${highlighted ? 'bg-secondary text-white hover:bg-secondary/90' : 'bg-primary text-secondary hover:bg-secondary/10'}`}>
        En savoir plus
      </button>
    </motion.div>
  );
};

export default Card;
