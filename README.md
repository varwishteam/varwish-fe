This is a client side application of our school project VarWish
Requirements for this application are: 
* Have nodejs 10.15.3 installed
can be installed through package manager (apt, apt-get, ...)
```
apt-get update
apt-get install nodejs
```
* Have nvm (node version manager) installed
https://github.com/creationix/nvm
* Have npm (node package manager) installed
can be installed through package manager (apt, at-get, ...)
```
apt-get update
apt-get install npm
```

---HOW TO RUN APP ON LOCALHOST---

To run this application just run these commands from the root directory, everything else is prepared

```
nvm use
npm install
npm start
```

* `nvm use` will change your nodejs version accordingly
* `npm install` will install all the dependencies
* `npm start` will serve your app on https://localhost:3000

---IMPORTANT NOTES---
* before working with packages in the project, make sure you work in the same nodejs version

  always make sure that you run `nvm use` before starting app or adding/building packages
  
  try to remember this so you won't run into any issues
