import path from 'path';
import fs from 'fs';

export function getFilesByExtension(startPath, filter) {
    if (!fs.existsSync(startPath)) {
        return [];
    }

    const files = fs.readdirSync(startPath) || [];

    const fileNames = files.map(file => {
        const filename = path.join(startPath, file);
        const stat = fs.lstatSync(filename);

        if (stat.isDirectory()) {
            return fromDir(filename, filter);
        } 
        else if (filter.test(filename)) {
            return filename;
        } 
    });

    return fileNames;
};