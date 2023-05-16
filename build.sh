#!/bin/bash

cd recogito-client-core
npm install
npm audit fix --force #Seems to not cause any breaking changes
cd ../recogito-js
npm install
npm audit fix --force #Seems to not cause any breaking changes
npm run build
npm run build-polyfills
cd ../annotorious
npm install
npm audit fix --force #Seems to not cause any breaking changes
npm run build
npm run build-polyfills
cd ..
npm install
npm audit fix --force #Seems to not cause any breaking changes
