import { getDirectoryPath, listFilesRecursively, normalizePath, readFile } from "./files";

type TreeDee = Record<string, Array<string>>;

export const getDepTree = (path: string) => {
    const tree: TreeDee = {};
    const files = listFilesRecursively(path)
    files.forEach(file => {
        tree[file] = analizeFile(file);
    })
    console.log(files);
}


const analizeFile = (file: string): string[] => {
    const filePath = getDirectoryPath(file)
    console.log("Imports de -> " + file + "  path -> " + filePath)
    const text = readFile(file)
    const deps = getImports(file, text)
    console.log(deps);
    const fullDeps = deps.map(dep => filePath + "/" + dep)

    console.log(fullDeps);

    const validatedDeps = fullDeps.map(dep => normalizePath(dep))
    console.log(validatedDeps);
    return deps;
}


const getImports = (_file: string, _text: string): string[] => {
    const deps: string[] = [];


    const regex = /import\s+[^'"]*\s+from\s+['"]([^'"]+)['"]/g;

    let match;

    // Buscar todas las coincidencias y extraer los paths
    while ((match = regex.exec(_text)) !== null) {
        deps.push(match[1]);
    }

    return deps;
}