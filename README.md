# Text Editor Starter Code


Welcome to the Text Editor PWA! This is a browser-based text editor that offers the flexibility to write code or notes with or without an internet connection. Built to be a Progressive Web Application, the text editor can be installed on your desktop or mobile device and is fully functional offline.



## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)


## Features

| | |
| --- | --- |
|- **Offline Functionality:** Edit and save your text snippets or code without an internet connection. |
| - **IndexedDB Integration:** Your data persists between sessions using the IndexedDB web API. |
| - **Installable:** Add the application to your home screen or desktop for quick access. |
| - **Service Worker:** A registered service worker to cache assets and serve them efficiently.
 |

### Technologies Used

| Technology | Description |
| --- | --- |
| HTML5, CSS3, and JavaScript |
| -[CodeMirror](https://codemirror.net/) for the in-browser code editor |
| - [Webpack](https://webpack.js.org/) for bundling assets |
| -[Babel](https://babeljs.io/) for JavaScript ES6+ support |
| - [Workbox](https://developers.google.com/web/tools/workbox) for service worker management |
| - [idb](https://www.npmjs.com/package/idb) as a wrapper for IndexedDB |


## Installation

To get started with your own instance of the Text Editor PWA:


### Clone repo to destinaton.

```bash

cd text-editor-pwa
npm install
```

### Install dependencies using:

```bash
npm run start
```

```bash
npm run build
```



# Contributors

Contributions to improve the Text Editor PWA are welcome. Please ensure you update tests as appropriate..



## License

 [MIT licensed](./LICENSE).