import fs from 'fs';
import path from 'path';

// Atualize para o caminho correto
const directoryPath = path.join(process.cwd(), 'public', 'imagens', 'galeria');
const outputPath = path.join(directoryPath, 'media.json');

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  const media = files.filter(file => /\.(jpg|jpeg|png|gif|mp4|webm|mov)$/.test(file));
  fs.writeFileSync(outputPath, JSON.stringify(media, null, 2));
  console.log('media.json has been generated');
});