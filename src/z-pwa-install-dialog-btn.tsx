import React from 'react';

interface ZPwaDialogButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'info'; // you can adjust the possible variants here
}

const ZPwaDialogButton: React.FC<ZPwaDialogButtonProps> = ({ onClick, children, className = '', variant = 'primary' }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} z-pwa-dialog-button z-pwa-dialog-button-${variant}`}
    >
      {children}
    </button>
  );
};

export default ZPwaDialogButton;
