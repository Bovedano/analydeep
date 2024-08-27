
const clc = require('cli-color');

export const printTitle = (text: string) => {
    console.log(("> " + text)); // texto verde
}

export const printError = (text: string) => {
    console.log(clc.red("   X " + text)); // texto verde
}

export const printHeaderMessage = () => {
    console.log("")
    printHeaderLine("   _               _          ___           ")
    printHeaderLine("  /_\\  _ __   __ _| |_   _   /   \\___ _ __  ")
    printHeaderLine(" //_\\\\| '_ \\ / _` | | | | | / /\\ / _ \\ '_ \\ ")
    printHeaderLine("/  _  \\ | | | (_| | | |_| |/ /_//  __/ |_) |")
    printHeaderLine("\\_/ \\_/_| |_|\\__,_|_|\\__, /___,' \\___| .__/ ")
    printHeaderLine("                     |___/           |_|   ")
    printHeaderLine("                                              v.0")
    console.log("")
}

const printHeaderLine = (line: string) => {
    console.log(clc.cyan(line));
}