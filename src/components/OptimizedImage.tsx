import React from 'react';
import Image from 'next/image';

// Define prop types for the OptimizedImage component
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
  style?: React.CSSProperties;
}

// Create a component for optimized image loading
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
  style = {},
}: OptimizedImageProps) => {
  // Generate blur placeholder data URL for non-priority images
  const blurDataURL = !priority ? 
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=' : 
    undefined;

  return fill ? (
    <Image
      src={src}
      alt={alt}
      fill={true}
      sizes={sizes}
      quality={quality}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      placeholder={!priority ? 'blur' : undefined}
      blurDataURL={blurDataURL}
      className={className}
      style={{ objectFit: 'cover', ...style }}
    />
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width || 100}
      height={height || 100}
      sizes={sizes}
      quality={quality}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      placeholder={!priority ? 'blur' : undefined}
      blurDataURL={blurDataURL}
      className={className}
      style={style}
    />
  );
};

export default OptimizedImage;
