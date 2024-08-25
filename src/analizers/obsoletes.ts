import { AnalizerInputData, AnalizerReturnData, AnalyzerFunction } from "../model";
import { printError, printTitle } from "../utils/print";

const madge = require('madge');

export const analyzer: AnalyzerFunction = async (data: AnalizerInputData): Promise<AnalizerReturnData> => {
    printTitle('Obsolete components');

    try {
        await madge(data.path, {
            fileExtensions: "js, jsx, ts, tsx"
        }).then((res: any) => {
            analyzeDeps(res.obj())
        });
        return {
            errors: 0
        };

    } catch (err) {
        return {
            errors: 1
        };
    }
}


const analyzeDeps = (deps: object) => {
    Object.keys(deps).forEach(dep => {

        if (findInDeps(deps, dep)) {
            //console.log("DEP OK -> " + dep)
        } else {
            printError(dep)
        }
    })
}

const findInDeps = (deps: object, depToFind: string): boolean => {
    return Object.values(deps).some(depChildArray => depChildArray.some((depChildItem: string) => depChildItem === depToFind))
}