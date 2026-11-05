import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const webDir = resolve(projectRoot, 'www');
mkdirSync(webDir, { recursive: true });
copyFileSync(resolve(projectRoot, 'index.html'), resolve(webDir, 'index.html'));
console.log('Web-Spiel nach www/index.html kopiert.');
