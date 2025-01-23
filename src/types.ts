import {ReactNode} from "react";

export interface ZPwaDialogButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'info';
}

export interface DialogProps {
    title?: string;
    onDownloadPwa?: () => void;
    children: ReactNode;
    isOpen?: boolean; 
    onClose?: () => void;
};

export interface ZPwaInstallInstrucProps {
    className? : string;
}



