import React, { useState, useEffect, ReactElement } from 'react';
import DialogButton from "./z-pwa-install-dialog-btn";
import ZPwaInstallInstruc from "./z-pwa-install-instruc";

interface DialogProps {
    title?: string;
    onDownloadPwa?: () => void;
    children: React.ReactNode;
    isOpen?: boolean; 
    onClose?: () => void;
}

const Dialog: React.FC<DialogProps> = ({
title = 'Download App Now',
onDownloadPwa,
children,
isOpen: controlledIsOpen,
onClose,
}) => {

const [isOpen, setIsOpen] = useState<boolean>(false);

useEffect(() => {
    
    if (controlledIsOpen !== undefined) {
    setIsOpen(controlledIsOpen);
    }
}, [controlledIsOpen]);

const openDialog = () => {
    if (onClose) {
    onClose();
    }
    setIsOpen(true);
};

const closeDialog = () => {
    setIsOpen(false);
    if (onClose) {
    onClose();
    }
};

return (
    <>
    <div>
        {React.isValidElement(children) ? (
            <div onClick={openDialog}>
                {React.cloneElement(children as ReactElement)}
            </div>
        ) : (
            <DialogButton onClick={openDialog}>Install App</DialogButton>
        )}
    </div>


    {/* Dialog */}
    {isOpen && (
        <div className="z-pwa-dialog-overlay">
        <div className="z-pwa-dialog-content">
            <div className="z-pwa-dialog-header">
            <h3>{title}</h3>
            <button
                onClick={closeDialog}
                className="z-pwa-dialog-button-info z-pwa-icon-button"
            >
                &times;
            </button>
            </div>
            <div className="z-pwa-dialog-body">
            <ZPwaInstallInstruc />
            </div>
            <div className="z-pwa-dialog-footer">
            <DialogButton onClick={closeDialog} variant="info" className="button button-info">
                Close
            </DialogButton>
            <DialogButton
                onClick={() => {
                if (onDownloadPwa) onDownloadPwa();
                closeDialog();
                }}
                variant="primary"
            >
                Done!
            </DialogButton>
            </div>
        </div>
        </div>
    )}
    </>
);
};

export default Dialog;
