
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ title, children, className, id }: SectionProps) => {
  return (
    <section id={id} className={cn("py-6", className)}>
      <div className="container">
        <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-nappy-pink to-nappy-teal bg-clip-text text-transparent">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
