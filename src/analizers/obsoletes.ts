import { AnalizerInputData, AnalizerReturnData, AnalyzerFunction } from "../model";
//import { getDepTree } from "../utils/dependencyfinder";
import { printError, printTitle } from "../utils/print";

const madge = require('madge');

export const analyzer: AnalyzerFunction = async (data: AnalizerInputData): Promise<AnalizerReturnData> => {
    //getDepTree(data.path);
    try {
        await madge(data.path, {
            fileExtensions: "js, jsx, ts, tsx",
            compilerOptions: {
                "module": "commonjs",
                "allowJs": true
            }
        }).then((res: any) => {
            printTitle('Obsolete components');

            analyzeDeps(data, res.obj())
            console.log(res.orphans().length)
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


const analyzeDeps = (_data: AnalizerInputData, deps: object) => {
    let obsoletes = 0;
    Object.keys(deps).forEach(dep => {

        if (findInDeps(deps, dep)) {
            //console.log("DEP OK -> " + dep)
        } else {
            obsoletes = obsoletes + 1;
            printError(dep)
        }
    })
    printError("Obsoletes: " + obsoletes)
}

const findInDeps = (deps: object, depToFind: string): boolean => {
    return Object.values(deps).some(depChildArray => depChildArray.some((depChildItem: string) => depChildItem === depToFind))
}