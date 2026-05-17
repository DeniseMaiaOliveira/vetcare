const fs = require('fs');
let c = fs.readFileSync('src/App.tsx', 'utf8');
const imp = "import { getPets, savePet, getClients, saveClient } from './lib/api';\n";
if (!c.includes('lib/api')) {
  fs.writeFileSync('src/App.tsx', imp + c);
  console.log('OK!');
} else {
  console.log('ja existe');
}