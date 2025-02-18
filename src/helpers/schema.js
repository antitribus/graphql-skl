import fs from 'fs';

export function readSchemaFiles(schemaFiles = []) {
    let content = '';

    schemaFiles.forEach(file => {
        content += fs.readFileSync(file, 'utf8');
    });

    return content;
}