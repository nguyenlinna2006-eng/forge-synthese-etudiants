import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

const cheminInitial = process.argv[2] ?? '/';
const port = Number(process.env.PORT ?? 4173);
const types = {
  html: 'text/html; charset=utf-8',
  js: 'text/javascript; charset=utf-8',
  css: 'text/css; charset=utf-8',
  json: 'application/json; charset=utf-8',
};

createServer(async (requete, reponse) => {
  const chemin = new URL(requete.url, 'http://localhost').pathname;
  const fichier = chemin === '/' ? '/index.html' : chemin;
  // Seuls les fichiers du cours sont servis.
  const autorise = new Set(['/index.html', '/script.js', '/stockage.js', '/styles.css', '/data/ateliers.json']).has(fichier);
  if (!autorise) {
    reponse.writeHead(404).end('Fichier introuvable');
    return;
  }

  try {
    const contenu = await readFile(new URL('.' + fichier, import.meta.url));
    const extension = fichier.split('.').pop();
    reponse.writeHead(200, { 'Content-Type': types[extension] }).end(contenu);
  } catch {
    reponse.writeHead(404).end('Fichier introuvable');
  }
}).listen(port, '127.0.0.1', () => {
  console.log('Ouvrir http://127.0.0.1:' + port + cheminInitial);
});
