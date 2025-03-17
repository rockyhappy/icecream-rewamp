'use client';

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = '#1672cc' 
}) => {
  // Determine spinner size based on prop
  const getSpinnerSize = () => {
    switch (size) {
      case 'sm':
        return 30;
      case 'lg':
        return 70;
      case 'md':
      default:
        return 50;
    }
  };

  const spinnerSize = getSpinnerSize();

  return (
    <div className="loading-spinner-container">
      <div className="spinner" style={{ width: spinnerSize, height: spinnerSize }}>
        <div className="double-bounce1" style={{ backgroundColor: color }}></div>
        <div className="double-bounce2" style={{ backgroundColor: color }}></div>
      </div>
      <style jsx>{`
        .loading-spinner-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        
        .spinner {
          position: relative;
        }
        
        .double-bounce1, .double-bounce2 {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          opacity: 0.6;
          position: absolute;
          top: 0;
          left: 0;
          animation: sk-bounce 2.0s infinite ease-in-out;
        }
        
        .double-bounce2 {
          animation-delay: -1.0s;
        }
        
        @keyframes sk-bounce {
          0%, 100% { 
            transform: scale(0.0);
          } 50% { 
            transform: scale(1.0);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner; 