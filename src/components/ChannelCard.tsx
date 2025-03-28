
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ChannelCardProps {
  title: string;
  description: string;
  link: string;
  color: "pink" | "teal" | "blue";
}

const ChannelCard = ({ title, description, link, color }: ChannelCardProps) => {
  const getBgColor = () => {
    switch (color) {
      case "pink": return "bg-nappy-pink-bg";
      case "teal": return "bg-nappy-teal-bg";
      case "blue": return "bg-nappy-blue-bg";
      default: return "bg-nappy-pink-bg";
    }
  };

  const getBorderColor = () => {
    switch (color) {
      case "pink": return "border-nappy-pink-light";
      case "teal": return "border-nappy-teal-light";
      case "blue": return "border-nappy-blue-light";
      default: return "border-nappy-pink-light";
    }
  };

  const getIconColor = () => {
    switch (color) {
      case "pink": return "text-nappy-pink";
      case "teal": return "text-nappy-teal";
      case "blue": return "text-nappy-blue";
      default: return "text-nappy-pink";
    }
  };

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`block p-4 rounded-xl border ${getBorderColor()} ${getBgColor()} mb-3 hover:shadow-md transition-shadow`}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold">{title}</h3>
        <ExternalLink size={16} className={getIconColor()} />
      </div>
      <p className="text-sm text-gray-700">{description}</p>
    </a>
  );
};

export default ChannelCard;
