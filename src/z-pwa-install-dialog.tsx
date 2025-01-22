import React, {ReactNode} from 'react';
import "./globals.css";
import ZPwaInstallInstruc from "@/z-pwa-install-instruc";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose
} from "@/components/ui/dialog"

import ZPwaInstallDialogTrigger from './z-pwa-install-dialog-trigger';


interface ZPwaInstallDialogProps {
    children?: ReactNode;
    title?: string;
    onDownloadPwa?: () => void; 
}

const ZPwaInstallDialog: React.FC<ZPwaInstallDialogProps> = ({ onDownloadPwa, children , title }) => {

    if(!children){
        children = (<ZPwaInstallDialogTrigger/>);
    }

    if(!title){
        title = "Download Pwa Now";
    }

    return (
        <Dialog>
            {children }

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>
                    
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <ZPwaInstallInstruc/>
            </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                        Close
                        </Button>
                    </DialogClose>
                    <DialogClose onClick={onDownloadPwa} asChild>
                        <Button type="button">
                        Done!
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );    
};

export default ZPwaInstallDialog;
