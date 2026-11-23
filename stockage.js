// Ce module est importé par script.js. Complète les deux fonctions en dernier.
const cleFavoris = 'forge-synthese-favoris';

export function lireFavoris() {
  // TODO 05a — Lis la valeur avec localStorage.getItem.
  // Si la clé est absente, renvoie []. Sinon, analyse le texte avec JSON.parse.
  // Si ce n’est pas un tableau, renvoie []. Garde seulement les identifiants texte.
  // Protège la lecture avec try/catch : en cas de JSON invalide, renvoie [].
  return [];
}

export function ecrireFavoris(ids) {
  // TODO 05b — Convertis ids en texte avec JSON.stringify.
  // Enregistre ce texte sous cleFavoris avec localStorage.setItem.
}
