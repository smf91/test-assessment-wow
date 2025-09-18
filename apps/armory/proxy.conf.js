import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  '/api/getCharacter': {
    target: 'http://localhost:4200',
    secure: false,
    bypass: (req, res) => {
      if (req.url === '/api/getCharacter') {
        const filePath = join(__dirname, '../../moks/character.json');
        const data = JSON.parse(readFileSync(filePath, 'utf-8'));
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
        return true;
      }
    },
  },
};
