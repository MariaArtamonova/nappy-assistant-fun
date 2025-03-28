
import React from 'react';
import { Check } from 'lucide-react';

interface SubscriptionCardProps {
  title: string;
  isPremium: boolean;
  features: string[];
}

const SubscriptionCard = ({ title, isPremium, features }: SubscriptionCardProps) => {
  return (
    <div className={`border rounded-xl p-5 ${isPremium ? 'bg-nappy-pink-bg border-nappy-pink' : 'bg-white border-gray-200'}`}>
      <h3 className={`text-lg font-bold mb-2 ${isPremium ? 'text-nappy-pink' : 'text-gray-700'}`}>{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check size={18} className={`mt-0.5 mr-2 ${isPremium ? 'text-nappy-pink' : 'text-nappy-teal'}`} />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      {isPremium && (
        <div className="mt-4">
          <a 
            href="https://t.me/NappyClub_bot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full py-2 text-center bg-nappy-pink text-white rounded-lg hover:bg-nappy-pink/90 transition-colors"
          >
            Купить подписку
          </a>
        </div>
      )}
    </div>
  );
};

export default SubscriptionCard;
