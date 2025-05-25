import DeviceDetector from "device-detector-js";
import { DeviceDetectorResult } from "device-detector-js";
import {instrucs, osInstruc} from "../instructions";
import {ZPwaInstallInstrucProps} from "../types";


/**
 * 
 * to style it just .pwa-install-instructions
 * 
 * .z-pwa-install-instructions > ul
 * . z-pwa-install-instructions > li
 * .......
 */

const ZPwaInstallInstruc: React.FC<ZPwaInstallInstrucProps> = ({ className }) => {


  const getConfig = () => {

    const deviceDetector = new DeviceDetector();
    const info : DeviceDetectorResult = deviceDetector.parse(navigator.userAgent);
    const browser = info.client?.name?.toLowerCase() ?? "";
    const os = info.os?.name?.toLowerCase() ?? "";
    const device = info.device?.type?.toLowerCase() ?? "";
    let res : string[]  = [];
    // detect sys in failure use device
    if(Object.keys(osInstruc).includes(os)){
    res = osInstruc[os];
    }
    else{
    if(device == "mobile"){
        res = osInstruc["android"];
    }
    else {
    //if(device == "desktop"){
        res = osInstruc["mac/windows/linux"];
    }
    }

    // detect browser for more specific instructions
    Object.keys(instrucs).forEach(el=>{
    if(el.includes(browser)){
        Object.keys(instrucs[el]).forEach((ell)=>{
        if(ell.includes(os)){
            res = instrucs[el][ell];
        }
        })
    }
    })
    
    
    return res;

    };

    const installInstr = getConfig();

  return (
    <div className={`${className} z-pwa-install-instructions`}>
      <ul>
        {installInstr.map((el, idx) => (
          <li key={idx} dangerouslySetInnerHTML={ { __html: el} }></li>
        ))}
      </ul>
    </div>
  );
};

export default ZPwaInstallInstruc;
