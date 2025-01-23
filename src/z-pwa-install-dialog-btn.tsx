import "./index.css";
import {ZPwaDialogButtonProps} from "./types";
const ZPwaDialogButton: React.FC<ZPwaDialogButtonProps> = ({
  onClick,
  children,
  className = '',
  variant = 'primary',
}) => {
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
