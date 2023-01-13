# Chrome Extension Boilerplate with React 18 and TypeScript
Chrome Extension Boilerplate using Create React App / TypeScript / Eslint config Airbnb

## Features
- [Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [React 18](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [Prettier](https://prettier.io/)

## Usage

#### Development
> The unpacked extension will be saved to the /dev folder
> Unpack your extension from /dev into your browser

```sh
npm run start
```
> Hot reload will work for popup pages and options pages.
> For content scripts, you must reload the extension in the `chrome://extensions/` tab
#### Production build
> The extension will be saved to the /build folder
```sh
npm run build
```

## Usage

#### Development
> The unpacked extension will be saved to the /dev folder
> Unpack your extension from /dev into your browser

```sh
npm run start
```
> Hot reload will work for popup and options pages.
> For content scripts, you must reload the extension in the `chrome://extensions/` tab
#### Production build
> The extension will be saved to the /build folder
```sh
npm run build
```
## Structure
- `src/popup/Popup.tsx` - [popup page](https://developer.chrome.com/docs/extensions/reference/browserAction/)
- `src/options/Options.tsx` - [options page](https://developer.chrome.com/docs/extensions/mv3/options/)
- `src/background/index.ts` - [service worker](https://developer.chrome.com/docs/extensions/mv3/service_workers/)
- `src/contentScript/index.ts` - [content script](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)

## Inspiration
The template has been created using [create-react-extension](https://github.com/VasilyShelkov/create-react-extension) and changes have been made to make it easier and faster to run:
- Migrating to Manifest V3
- Addition eslint-config-airbnb
- Typescript support added


