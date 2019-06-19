# Sigfred

[![N|Solid](https://media.licdn.com/dms/image/C4E0BAQGMR0qJbnD7PQ/company-logo_200_200/0?e=2159024400&v=beta&t=tecore7fKknZOYu6Ac8tbijx7CQmV0XYDMt3cb7okws)](https://www.linkedin.com/company/sigfred)

💻💰 Sigfred Wallet for desktop computers

## Development

### Requirements

* [Node.js](https://nodejs.org) LTS (v8)

### Launch

```bash
# Install dependencies
npm i

# Run build process
npm run dist

# Run dev mode macOS & Linux
npm run dev

# Run dev mode Windows
npm run dev_win
```

### Logs

The log output is in the next directories:

* **Linux:** `~/.config/<app name>/log.log`
* **macOS:** `~/Library/Logs/<app name>/log.log`
* **Windows:** `%USERPROFILE%\AppData\Roaming\<app name>\log.log`

More info [github.com/megahertz/electron-log](https://github.com/megahertz/electron-log)

### Settings

* **Linux**: `~/.config/SIGFRED-wallet/Settings`
* **macOS**: `~/Library/Application Support/SIGFRED-wallet/Settings`
* **Windows**: `%APPDATA%\\SIGFRED-wallet\\Settings`

To completely remove the application and start over, remove the settings file too.


Then, start the wallet setting the proper environment variable as follows:

```bash
REACT_APP_ETH_CHAIN=ropsten npm run dev
```

Alternatively, a `.env` file can also be used to set the chain variable.

### Production Build

```bash
# Run build process
npm run dist

# Run build process and publish to GitHub releases
npm run release
```

To sign the macOS installers, execute `npm run dist:mac`. The signing certificate shall be in the root folder and be named `sig.p12`. The certificate password will be required before signing.

## LICENSE

MIT
