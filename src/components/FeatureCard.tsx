
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  noHover?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, className, noHover = false }) => {
  return (
    <div className={cn(
      "p-4 rounded-xl border border-nappy-teal/20 bg-white", 
      !noHover && "hover:shadow-md transition-shadow",
      className
    )}>
      <div className="flex items-center space-x-2 mb-2">
        {icon && (
          <div className="p-2 rounded-lg bg-nappy-teal/10">
            {icon}
          </div>
        )}
        <h3 className="font-medium text-nappy-teal">{title}</h3>
      </div>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
