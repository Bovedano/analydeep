export const getPath = () => {

    let path = __dirname;
    if (process.argv.length > 2) {
        path = process.argv[2]
    }

    return path;
}