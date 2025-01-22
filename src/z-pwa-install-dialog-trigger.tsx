import React , { ReactNode } from 'react';
import { Button } from "@/components/ui/button"
import {

  DialogTrigger,
} from "@/components/ui/dialog"


interface ZPwaInstallDialogTriggerProps {
    children?: ReactNode; 
}

const ZPwaInstallDialogTrigger: React.FC<ZPwaInstallDialogTriggerProps> = ({ children }) => {


    return (
            <DialogTrigger asChild>
                {
                    React.isValidElement(children) ? 
                    children : 
                    <Button variant="outline">Install App</Button>     
                }

            </DialogTrigger>
        
    );    
};

export default ZPwaInstallDialogTrigger;
