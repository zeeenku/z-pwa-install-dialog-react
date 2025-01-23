z-pwa-install-dialog-react
==========================

A simple, customizable React component for handling PWA (Progressive Web App) installation dialogs. It detects device configurations (OS, browser) and displays the right installation instructions for the user.

Table of Contents:
------------------

*   [How to Use](#how-to-use)
*   [Features](#features)
*   [Installation](#installation)
*   [Examples](#examples)
*   [Author](#author)
*   [Hire Me](#hire-me)

Features
--------

*   No UI library dependencies, but designed to resemble ShadCN UI.
*   Auto detects device OS, browser, and shows tailored instructions.
*   Super simple to use with just one component.
*   Fully customizable dialog and instructions.

Installation
------------

Install with npm:

    npm install z-pwa-install-dialog-react

Examples
--------

### Minimal Example

    
    import { ZPwaInstallDialog } from 'z-pwa-install-dialog-react';
    
    function App() {
      return Install;
    }
    
    export default App;
      

### Customizing the Trigger

    
    import { ZPwaInstallDialog } from 'z-pwa-install-dialog-react';
    
    function App() {
      return (
        
         ZPwaInstallDialog>
            {/* must be a dom element not text! */}
            <div>install</div>
         </ZPwaInstallDialog>
        
      );
    }
    
    export default App;
      

### Customizing the Dialog

    
    import { ZPwaInstallDialog } from 'z-pwa-install-dialog-react';
    
    function App() {
      const handleDownload = () => { /* Download logic */ };
      const handleClose = () => { /* Close logic */ };
    
      return (
        
           <ZPwaInstallDialog title="hello world" onDownloadPwa={handleDownload}
            onClose={handleClose}
            //isOpen={open}
            >
                <div>install</div>
            </ZPwaInstallDialog>
        
      );
    }
    
    export default App;
      

### Creating Your Own Instructions Component

    
    import { ZPwaInstallInstruc } from 'z-pwa-install-dialog-react';
    
    function App() {
      return (
            <>
                <h1>Welcome to the PWA Install Demo</h1>
                <ZPwaInstallInstruc/>
            </>
      );
    }
    
    export default App;
      

Author
------

**Zenku (Enajjachi Zakariaa)** – _Initial work_  
[dev.zeenku.com](https://dev.zeenku.com)

Hire Me
-------

If you liked this package and want to work with me on a freelance project, I am available for hire! You can reach me at:

[Hire me for your project](https://dev.zeenku.com/)

Feel free to open an issue or send a pull request if you encounter any bugs or have suggestions for improvements. 😊