# MassComparisonHelper
An electron-based app that helps you make lengthy pros and cons lists.

## Prerequisites
NodeJS, Electron-Forge
```
brew install npm
npm i electron-forge
```

## Compilation and Installation
Clone the git repo, `cd` into it and then run the following commands:
```
npm run make
mv ./out/MassComparisonHelper-<arch>/MassComparisonHelper.app /Applications 
```
Since I have Apple Silicon Macs, arch for me was darwin-arm64.
