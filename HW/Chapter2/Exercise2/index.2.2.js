const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

async function exploreDirectory(directoryPath) {
  try {
    const files = await readdir(directoryPath);
    
    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      const fileStat = await stat(filePath);
      
      if (fileStat.isDirectory()) {
        await exploreDirectory(filePath);
      } else if (path.extname(file) === '.js') {
        console.log(filePath);
      }
    }
  } catch (error) {
    console.error(`Error exploring directory ${directoryPath}: ${error.message}`);
  }
}

const startDirectory = './test';
exploreDirectory(startDirectory);
