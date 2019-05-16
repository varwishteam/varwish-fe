[![Build Status](https://travis-ci.com/varwishteam/varwish-fe.svg?branch=master)](https://travis-ci.com/varwishteam/varwish-fe)

# VarWish

This is a client side application of our school project VarWish
Requirements for this application are:

## Developer setup

1. Have nodejs 10.15.3 installed, can be installed through package manager (apt, apt-get, ...)

```sh
apt-get update
apt-get install nodejs
```

2. Have nvm (node version manager) installed (https://github.com/creationix/nvm)

   - To use nvm on Windows, use the Windows subsystem for Linux (WSL)

3. Have npm (node package manager) installed, can be installed through package manager (apt, at-get, ...)

```sh
apt-get update
apt-get install npm
```

### Running the app locally

To run this application just run these commands from the root directory, everything else is prepared

```sh
nvm use          # will change your nodejs version accordingly
npm install      # will install all the dependencies
npm start        # will serve your app on https://localhost:3000
```

**IMPORTANT NOTES**

- Before working with packages in the project, make sure you work in the same nodejs version
- Always make sure that you run `nvm use` before starting app or adding/building packages
- Try to remember this so you won't run into any issues

## Building for production

Create an optimized build

```sh
npm run build
```

## Generating the docs

Generate HTML documentiation from JSDoc comments in the code

```sh
npm run docs
```
