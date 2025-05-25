  z-pwa-install-dialog-react

z-pwa-install-dialog-react
==========================

A simple, customizable React(Next js compatible) components for handling PWA (Progressive Web App) installation dialogs. It detects device configurations (OS, browser) and displays the right installation instructions for the user.

Table of Contents:
------------------

*   [Features](#features)
*   [Installation](#installation)
*   [Examples](#examples)
*   [Author](#author)
*   [Contact Me](#contact-me)

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

for more detailed demo projects:
🔗 [https://github.com/zeeenku/zeeenku](https://github.com/zeeenku/pwa-install-dialog-demo)

### Minimal Example

    "use client";
    import { ZPwaInstallDialog } from 'z-pwa-install-dialog-react';
    
    function App() {
      return (<ZPwaInstallDialog/>);
    }
    
    export default App;
    

### Customizing the Trigger

    "use client";
    import { ZPwaInstallDialog } from 'z-pwa-install-dialog-react';
    
    function App() {
      return (
        <ZPwaInstallDialog>
          {/* jsx element if you want */}
          <div>install</div>
        </ZPwaInstallDialog>
      );
    }
    
    export default App;
    

### Customizing the Dialog

    "use client";
    import { ZPwaInstallDialog } from 'z-pwa-install-dialog-react';
    
    function App() {
      const handleDownload = () => { /* Download logic */ };
      const handleClose = () => { /* Close logic */ };
    
      return (
        <ZPwaInstallDialog 
          title="hello world" 
          onDownloadPwa={handleDownload} 
          onClose={handleClose}
          //isOpen={open}
        >
          <div>install</div>
        </ZPwaInstallDialog>
      );
    }
    
    export default App;
    

### Creating/Customizing Your Own Instructions Component

    "use client";
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

![Zenku - Enajjachi Zakariaa](https://raw.githubusercontent.com/zeeenku/zeeenku/refs/heads/main/me-with-laptop.jpg)

**Zenku (Enajjachi Zakariaa)** – _Initial Work_

[https://dev.zeenku.com](https://dev.zeenku.com)

Enthusiastic Developer & Programmer working on ideas that exhilarate him. I specialize in full-stack development with a focus on TypeScript, Laravel, React, and Vue.

Contact Me
----------

Interested in collaborating or have a project in mind? Feel free to reach out:  
[https://dev.zeenku.com/contact](https://dev.zeenku.com/contact)  
Or use your preferred method—I'm always open to meaningful conversations.

If you come across any bugs or have ideas for improvement, don’t hesitate to **open an issue** or **submit a pull request**. 😊