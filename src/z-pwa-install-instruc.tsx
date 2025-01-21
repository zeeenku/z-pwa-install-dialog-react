import React from 'react';
import DeviceDetector from "device-detector-js";
import { DeviceDetectorResult, DeviceDetectorOptions } from "device-detector-js";
// might remove it later and just use plain css and stuff....
import "./globals.css";

interface ZPwaInstallInstrucProps {
    className? : string;
}

/**
 * 
 * @param param0 to style it just .pwa-install-instructions
 * @returns 
 * 
 * .pwa-install-instructions > ul
 * . pwa-install-instructions > li
 * .......
 */
const ZPwaInstallInstruc: React.FC<ZPwaInstallInstrucProps> = ({ className }) => {
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
        <div className={`${className} pwa-install-instructions`} >hhh</div>
    );    
};

export default ZPwaInstallInstruc;
