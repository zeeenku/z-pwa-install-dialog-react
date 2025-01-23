import { useState, useEffect,FC, ReactElement, isValidElement, ReactNode , cloneElement} from 'react';
import "./globals.css";
import DialogButton from "./z-pwa-install-dialog-btn";
import ZPwaInstallInstruc from "./z-pwa-install-instruc";

interface DialogProps {
    title?: string;
    onDownloadPwa?: () => void;
    children: ReactNode;
    isOpen?: boolean; 
    onClose?: () => void;
}

const Dialog: FC<DialogProps> = ({
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
    setIsOpen(true);
};

const closeDialog = (triggOnClose = true) => {
    setIsOpen(false);
    if (onClose && triggOnClose) {
    onClose();
    }
};

return (
    <>
    <div>
        {isValidElement(children) ? (
            <div onClick={openDialog}>
                {cloneElement(children as ReactElement)}
            </div>
        ) : (
            <DialogButton onClick={openDialog}>Install App</DialogButton>
        )}
    </div>


    {/* Dialog */}
    {isOpen && (
        <div className="z-pwa-dialog-overlay" onClick={()=>closeDialog()}>
        <div className="z-pwa-dialog-content">
            <div className="z-pwa-dialog-header">
            <h3>{title}</h3>
            <button
                onClick={() => closeDialog()}
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
                closeDialog(false);
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
