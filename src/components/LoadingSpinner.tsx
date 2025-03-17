'use client';

import React from 'react';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  thickness?: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 40,
  color = '#EF334C',
  thickness = 4
}) => {
  return (
    <div className="loading-spinner">
      <div 
        className="spinner" 
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderWidth: `${thickness}px`,
          borderTopColor: color
        }}
      ></div>
    </div>
  );
};

export default LoadingSpinner; 