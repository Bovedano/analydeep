import fs from 'fs';
import path from 'path';

export const listFilesRecursively = (directorio: string): string[] => {
    const archivos: string[] = [];

    function leerDirectorio(directorio: string) {
        const items = fs.readdirSync(directorio);

        items.forEach(item => {
            const rutaCompleta = path.join(directorio, item);
            const stats = fs.statSync(rutaCompleta);

            if (stats.isDirectory()) {
                leerDirectorio(rutaCompleta); // Llamada recursiva
            } else {
                archivos.push(rutaCompleta);
            }
        });
    }

    leerDirectorio(directorio);
    return archivos;
}


export const readFile = (directorio: string): string => {
    try {
        const contenido = fs.readFileSync(directorio, 'utf-8');
        return contenido;
    } catch (err) {
        console.error('Error al leer el archivo:', err);
        throw err; // Lanza el error para que el llamador pueda manejarlo
    }
}


export const getDirectoryPath = (filePath: string) => {
    // Obtén el directorio del archivo
    return path.dirname(filePath);
}


export const normalizePath = (filePath: string) => {
    // Normaliza la ruta para resolver secuencias como /../
    let normalizedPath = path.normalize(filePath);

    // Convierte todas las barras invertidas a barras normales
    normalizedPath = normalizedPath.replace(/\\/g, '/');

    return normalizedPath;
}


export const fileExists = (filePath: string) => {
    return new Promise((resolve) => {
        fs.access(filePath, fs.constants.F_OK, (err) => {
            resolve(!err);
        });
    });
}