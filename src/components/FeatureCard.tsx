
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
      "p-4 rounded-xl border border-nappy-pink-light/20 bg-white shadow-sm",
      "hover:shadow-md hover:border-nappy-pink-light/40 transition-all duration-300",
      className
    )}>
      <div className="flex items-center space-x-2 mb-2">
        <div className="p-2 rounded-lg bg-nappy-pink-bg/50">
          {icon}
        </div>
        <h3 className="font-medium text-nappy-pink">{title}</h3>
      </div>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
