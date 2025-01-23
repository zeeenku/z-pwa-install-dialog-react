  z-pwa-install-dialog-react README

z-pwa-install-dialog-react
==========================

**z-pwa-install-dialog-react** is a simple and customizable React component to handle PWA (Progressive Web App) installation dialogs. It automates the process, detecting device configurations (OS, browser) and showing the relevant installation instructions.

Table of Contents
-----------------

*   [How to Use](#how-to-use)
*   [Features](#features)
*   [Installation](#installation)
*   [Examples](#examples)

*   [Minimal Simple Example](#minimal-simple-example)
*   [Customizing the Trigger Element](#customizing-the-trigger-element)
*   [Customizing the Dialog](#customizing-the-dialog)
*   [Creating Your Own Instructions Component](#creating-your-own-instructions-component)

*   [Author](#author)
*   [Hire Me](#hire-me)

Features
--------

*   No dependency on UI libraries (yet designed to resemble ShadCN UI).
*   Automatically detects device type, OS, and browser, and provides tailored instructions.
*   Easy to use with just one component.
*   Highly customizable dialog, with support for creating your own instructions component.
*   Supported browsers: Chrome, Edge, Firefox, Safari, Opera.
*   Supported operating systems: Windows, Android, iOS, macOS, and Linux.

Installation
------------

To install `z-pwa-install-dialog-react` in your project, run the following command:

    npm install z-pwa-install-dialog-react

Examples
--------

### Minimal Simple Example

Here’s a basic example of how to use the component in your app:

    
    import { ZPwaInstallDialog } from 'z-pwa-install-dialog-react';
    
    function App() {
      return (
        <>
          Hello, this is a demo for the PWA install dialog package
          
            Install
          
        
      );
    }
    
    export default App;
      

### Customizing the Trigger Element

You can customize the trigger element. This example shows how to pass your own trigger:

    
    import { ZPwaInstallDialog } from 'z-pwa-install-dialog-react';
    
    function App() {
      return (
        <>
          Hello, this is a demo for the PWA install dialog package
          
            {/* Your custom trigger element */}
            Install PWA
          
        
      );
    }
    
    export default App;
      

### Customizing the Dialog

If you want to customize the dialog itself, you can pass additional props for the dialog's content and behavior:

    
    import { ZPwaInstallDialog } from 'z-pwa-install-dialog-react';
    
    function App() {
      let open = true;
    
      const handleDownload = () => {
        // Handle download logic here
      };
    
      const handleClose = () => {
        // Handle close logic here
      };
    
      return (
        <>
          Hello, this is a demo for the PWA install dialog package
          
            Install
          
        
      );
    }
    
    export default App;
      

### Creating Your Own Instructions Component

You can also create your own instructions component to be displayed within the dialog:

    
    import { ZPwaInstallInstruc } from 'z-pwa-install-dialog-react';
    
    function App() {
      return (
        <>
          Hello, this is a demo for the PWA install dialog package
          
        
      );
    }
    
    export default App;
      

Author
------

**Zenku (Enajjachi Zakariaa)** - _Initial work_ - [https://dev.zeenku.com](https://dev.zeenku.com)

Hire Me
-------

If you liked this package and want to work with me on a freelance project, I am available for hire! You can reach me at:

[Hire me for your project](https://dev.zeenku.com/)

Feel free to open an issue or send a pull request if you encounter any bugs or have suggestions for improvements. 😊