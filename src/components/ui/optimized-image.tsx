import React, { useState, useEffect, memo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  sizes = '100vw',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reset states when src changes
    setIsLoaded(false);
    setError(false);
  }, [src]);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setError(true);

  const imgClassNames = `transition-opacity duration-300 ${
    isLoaded ? 'opacity-100' : 'opacity-0'
  } ${className}`;

  // Construct srcSet for responsive images
  const generateSrcSet = () => {
    if (!src.includes('.jpg') && !src.includes('.png') && !src.includes('.webp')) {
      return undefined;
    }
    
    // Extract base path and extension
    const lastDot = src.lastIndexOf('.');
    if (lastDot === -1) return undefined;
    
    const basePath = src.substring(0, lastDot);
    const ext = src.substring(lastDot);
    
    return `${basePath}-300w${ext} 300w, ${basePath}-600w${ext} 600w, ${basePath}-900w${ext} 900w, ${src} 1200w`;
  };

  const srcSet = generateSrcSet();

  if (error) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '200px' }}
      >
        <span className="text-gray-500">Image not available</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={imgClassNames}
      loading={loading}
      fetchPriority={fetchPriority}
      onLoad={handleLoad}
      onError={handleError}
      srcSet={srcSet}
      sizes={sizes}
    />
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(OptimizedImage); 