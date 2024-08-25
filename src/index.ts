import { analyzer } from "./analizers/obsoletes";
import { AnalizerInputData, AnalyzerFunction } from "./model";
import { getPath } from "./utils/path";

const clc = require('cli-color');

process.stdout.write(clc.erase.screen);

export const init = async () => {
  try {
    const data: AnalizerInputData = {
      path: getPath()
    }

    const analizers: Array<AnalyzerFunction> = [
      analyzer
    ]
    for (let i = 0; i < analizers.length; i++) {
      await analizers[i](data)
    }


  } catch (error) {
    console.error('Error:', error);
  }
}

(async () => {
  await init();
})();
