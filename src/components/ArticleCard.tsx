import React from 'react';

interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
  url?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ image, title, description, url = "#" }) => {
  return (
    <a 
      href={url}
      target="_blank" 
      rel="noopener noreferrer"
      className="block bg-darkcard/90 backdrop-blur-md rounded-md overflow-hidden border border-neon/20 hover:border-neon/40 transition-all duration-300 light:border-darkgreen/20 light:hover:border-darkgreen/40 hover:shadow-md hover:transform hover:scale-[1.01]"
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-sm font-bold mb-2 text-white light:text-gray-800">{title}</h3>
        <p className="text-xs text-gray-400 light:text-gray-600">{description}</p>
        <span className="text-neon text-xs mt-3 inline-block light:text-darkgreen">Read more →</span>
      </div>
    </a>
  );
};

export default ArticleCard;
