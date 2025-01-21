import React from 'react';
import DeviceDetector from "device-detector-js";
import { DeviceDetectorResult, DeviceDetectorOptions } from "device-detector-js";
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
  DialogTrigger,
} from "@/components/ui/dialog"


interface ZPwaInstallDialogProps {
  text: string;
}

const ZPwaInstallDialog: React.FC<ZPwaInstallDialogProps> = ({ text }) => {
    const deviceDetector = new DeviceDetector();
    const device = deviceDetector.parse(navigator.userAgent);

    // {
    //     "client": {
    //       "type": "browser",
    //       "name": "Chrome",
    //       "version": "69.0",
    //       "engine": "Blink",
    //       "engineVersion": ""
    //     },
    //     "os": {
    //       "name": "Mac",
    //       "version": "10.13",
    //       "platform": ""
    //     },
    //     "device": {
    //       "type": "desktop",
    //       "brand": "Apple",
    //       "model": ""
    //     },
    //     "bot": null
    //   }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                    
                    Make changes to your profile here. Click save when you're done.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <ZPwaInstallInstruc/>
            </div>
                <DialogFooter>
                <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );    
};

export default ZPwaInstallDialog;
