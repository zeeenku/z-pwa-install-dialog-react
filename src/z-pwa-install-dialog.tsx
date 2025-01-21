import React from 'react';
import DeviceDetector from "device-detector-js";
import { DeviceDetectorResult, DeviceDetectorOptions } from "device-detector-js";

interface MyComponentProps {
  text: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ text }) => {
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
    return <div>{text}</div>;
};

export default MyComponent;
