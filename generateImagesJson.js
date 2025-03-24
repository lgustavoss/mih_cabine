import fs from 'fs';
import path from 'path';

// Atualize para o caminho correto
const directoryPath = path.join(process.cwd(), 'public', 'imagens', 'galeria');
const outputPath = path.join(directoryPath, 'images.json');

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
  fs.writeFileSync(outputPath, JSON.stringify(images, null, 2));
  console.log('images.json has been generated');
});