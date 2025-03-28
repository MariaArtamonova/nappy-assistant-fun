
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard = ({ title, description, icon, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "p-5 rounded-2xl border border-nappy-pink-light/30 bg-white shadow-sm",
      "hover:shadow-md hover:border-nappy-pink-light/50 transition-all duration-300",
      className
    )}>
      <div className="flex items-center space-x-3 mb-3">
        <div className="p-2 rounded-lg bg-nappy-pink-bg">
          {icon}
        </div>
        <h3 className="font-bold text-nappy-pink">{title}</h3>
      </div>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default FeatureCard;
