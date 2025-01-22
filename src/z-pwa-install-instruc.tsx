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
  /**
     * 1. Google Chrome (Desktop & Mobile)
Open the web app in Chrome.
Click the "Install" button (desktop) or tap the three-dot menu and select "Add to Home screen" (mobile).
Confirm and the app will install.
     */

// const clickDotsInstall = [
//     "Click/Tap the three-dot menu",
//     "Select \"Add to Home screen\"."
// ];

// const config = {
//     "chrome" : {
//         "desktop" : [
//             "Click the \"Install\" button  at top of search bar."
//         ],
//         "mobile" : clickDotsInstall,
//     },

//     "Microsoft Edge" : {
//         "desktop" : clickDotsInstall,

//         "mobile" : clickDotsInstall
//     },



//     "Microsoft Edge" : {
//         "desktop" : clickDotsInstall,
//         "mobile" : clickDotsInstall
        
//     },

//     "Firefox" : {
//         "desktop" : {
//             "mac" : []
//         },

//         "mobile" : {

//         }
//     }
// }

const getConfig = () => {
    return [
        "Tap the three-dot menu (top-right).",
        "Select 'Add to Home screen'.",
        "If not available, contact browser support for help."
    ];
}

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

    const installInstr = getConfig();

    return (
        <div className={`${className} pwa-install-instructions`} >
                                <ul>
            {
                (installInstr.length == 1) ?

                (<li>{installInstr[0]}</li>)

                : 
                
                installInstr.map((el, idx) => (
                    <ol key={idx}>{el}</ol>
                ))
            }
            </ul>
        </div>
    );    
};

export default ZPwaInstallInstruc;
