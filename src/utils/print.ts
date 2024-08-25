
const clc = require('cli-color');

export const printTitle = (text: string) => {
    console.log(clc.underline.white("> " + text)); // texto verde
}

export const printError = (text: string) => {

    console.log(clc.red("   X " + text)); // texto verde
}