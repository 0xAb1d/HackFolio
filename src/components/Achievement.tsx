import React from 'react';
import { CheckSquare } from 'lucide-react';

interface AchievementProps {
  text: string;
}

const Achievement: React.FC<AchievementProps> = ({ text }) => {
  return (
    <div className="flex items-start gap-3 mb-3 p-2 rounded-md hover:bg-darkcard/50 transition-colors light:hover:bg-darkgreen/5">
      <div className="text-neon mt-0.5 light:text-darkgreen">
        <CheckSquare size={16} />
      </div>
      <div className="text-sm text-gray-300 light:text-gray-700">{text}</div>
    </div>
  );
};

export default Achievement;
