import fileManager from './fileManager.js';
import readLineSync from 'readline-sync';
import path from 'path';
import url, { fileURLToPath } from 'url';

async function main () {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const baseDir = path.join(__dirname, 'my_files');

    while (true) {
        console.log('File Management System');
        console.log('1 - Criar arquivo');
        console.log('2 - Listar arquivo');
        console.log('3 - Ler arquivo'); 
        console.log('4 - Escrever arquivo');
        console.log('5 - Deletar arquivo');
        console.log('6 - Sair');
        const choice = readLineSync.question('Enter your choice: ');

try {

        switch (choice) {
            case '1':
                const fileName = readLineSync.question('Enter file name: ');                
                const fileContent = readLineSync.question('Enter file content: ');
                const createFilePath = path.join(baseDir, fileName);
                const fileMessage = await fileManager.createFile(createFilePath, fileContent);
                console.log(fileMessage);
                break;
            case '2':
                const files = await fileManager.listFiles(baseDir);
                console.log('Arquivos existentes: ', files);
                break;
            case '3':
                const readFileName = readLineSync.question('Enter file name: ');
                const readFilePath = path.join(baseDir, readFileName);
                const content = await fileManager.readFile(readFilePath);
                console.log('Conteúdo do arquivo:', content);
                break;
            case '4':
                const writeFileName = readLineSync.question('Enter file name: ');
                const writeFilePath = path.join(baseDir, writeFileName);
                const newContent = readLineSync.question('Enter new content: ');
                const messageWrite = await fileManager.writeFile(writeFilePath, newContent);
                console.log(messageWrite);
                break;
            case '5':
                const deleteFileName = readLineSync.question('Enter file name: ');
                const deleteFilePath = path.join(baseDir, deleteFileName);
                const messageDelete = await fileManager.deleteFile(deleteFilePath);
                console.log(messageDelete);
                return;
            case '6':
                console.log('Exiting...');
                return;
            default:
                console.log('Invalid choice!');
                break;
        };

    } catch (error) {
        console.log('Error: ', error.message);
    }
    }
}

main();