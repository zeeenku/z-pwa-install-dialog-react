  z-pwa-install-dialog-react

z-pwa-install-dialog-react
==========================

A simple, customizable React components for handling PWA (Progressive Web App) installation dialogs. It detects device configurations (OS, browser) and displays the right installation instructions for the user.

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

### Minimal Example

    import { ZPwaInstallDialog } from 'z-pwa-install-dialog-react';
    
    function App() {
      return (<ZPwaInstallDialog/>);
    }
    
    export default App;
    

### Customizing the Trigger

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

<p >
  <img src="https://raw.githubusercontent.com/zeeenku/zeeenku/refs/heads/main/me-with-laptop.jpg" alt="Zenku - Enajjachi Zakariaa"
       style="max-width: 200px; border-radius: 50%; object-fit: cover;">
</p>
**Zenku (Enajjachi Zakariaa)** – _Initial Work_

[https://dev.zeenku.com](https://dev.zeenku.com)

Enthusiastic Developer & Programmer working on ideas that exhilarate him. I specialize in full-stack development with a focus on TypeScript, Laravel, React, and Vue.

Contact Me
----------

Interested in collaborating or have a project in mind? Feel free to reach out:  
[https://dev.zeenku.com/contact](https://dev.zeenku.com/contact)  
Or use your preferred method—I'm always open to meaningful conversations.

If you come across any bugs or have ideas for improvement, don’t hesitate to **open an issue** or **submit a pull request**. 😊