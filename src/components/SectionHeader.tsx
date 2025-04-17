import React from 'react';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="mb-4">
      <h2 className="text-neon light:text-darkgreen font-terminal text-xl">{title}</h2>
      <div className="h-[1px] w-full bg-gradient-to-r from-neon to-transparent mt-1"></div>
    </div>
  );
};

export default SectionHeader;
