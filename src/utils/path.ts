export const getPath = () => {
    if (process.argv.length > 2) {
        const path = process.argv[2]
        console.log(path)
    } else if (process.argv.length > 1) {
        const path = process.argv[1]
        console.log(path)
    }

    return "C:\\Users\\Jorge\\Documents\\Workspace vscode\\NextBase\\nextbase\\src"
}