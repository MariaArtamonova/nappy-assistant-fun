
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
    <section id={id} className={cn("py-3", className)}>
      <div className="container">
        <h2 className="text-base sm:text-lg font-semibold mb-2 text-nappy-pink">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
