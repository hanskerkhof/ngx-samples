const path = require('path');
const colors = require('colors/safe');
const fs = require('fs');
const appVersion = require('./package.json').version;

console.log(colors.cyan('\nRunning pre-build tasks'));

const versionFilePath = path.join(__dirname + '/src/environments/.version.ts');
const isoDate = new Date().toISOString()

const src = 'export const appVersion = \'' + appVersion + '\';\n' + 'export const appDate = \'' + isoDate + '\';\n';

// ensure version module pulls value from package.json
fs.writeFile(versionFilePath, src, { flat: 'w' }, function (err) {
    if (err) {
        return console.log(colors.red(err));
    }

    console.log(colors.green(`Updating appVersion to ${colors.yellow(appVersion)}`));
    console.log(colors.green(`Updating appDate to ${colors.yellow(isoDate)}`));
    console.log(`${colors.green('Writing to module ')}${colors.yellow(versionFilePath)}\n`);
});
