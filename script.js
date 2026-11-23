// Exercice de synthèse — Catalogue d’ateliers
// import récupère uniquement les fonctions exportées par stockage.js.
import { lireFavoris, ecrireFavoris } from './stockage.js';
// L’état contient le dernier catalogue chargé avec succès.
// Données de départ pour réaliser le TODO 01 avant d’implémenter fetch.
let ateliers = [
  { id: 'html', titre: 'Construire une page accessible', categorie: 'HTML', minutes: 35 },
  { id: 'grid', titre: 'Créer une grille responsive', categorie: 'CSS', minutes: 45 },
];
const liste = document.querySelector('#liste');
const statut = document.querySelector('#statut');
const recherche = document.querySelector('#recherche');
const categorie = document.querySelector('#categorie');
const favorisSeuls = document.querySelector('#favoris-seuls');

const favoris = lireFavoris();

function basculerFavori(id) {
  // TODO 04a — Ajoute id au tableau favoris s’il est absent, sinon retire-le.
  // Indice : indexOf renvoie -1 si l’identifiant est absent. Voir push et splice.
  // Puis appelle ecrireFavoris avec le tableau mis à jour et relance afficher().
  // Le rendu recrée le bouton. On y replace le focus pour l’usage au clavier.
  liste.querySelector('[data-id="' + id + '"]')?.focus();
}

function creerCarte(atelier) {
  // createElement crée un élément en mémoire. append l’insère ensuite.
  const carte = document.createElement('li');
  const titre = document.createElement('h2');
  const details = document.createElement('p');

  // TODO 01a — Remplis le h2 avec atelier.titre.
  // Remplis le p avec la catégorie et la durée, par exemple « HTML · 35 min ».
  // Utilise textContent, puis ajoute le h2 et le p à la carte avec append.
  const bouton = document.createElement('button');
  bouton.type = 'button';
  bouton.textContent = 'Favori';
  bouton.dataset.id = atelier.id;
  bouton.setAttribute('aria-label', 'Favori : ' + atelier.titre);
  // TODO 04b — Mets aria-pressed à 'true' si favoris contient atelier.id,
  // sinon à 'false'. Au clic, appelle basculerFavori avec cet identifiant.
  carte.append(bouton);
  return carte;
}

function filtrerAteliers() {
  // TODO 03a — Nettoie la recherche avec trim et toLowerCase.
  // Dans filter, garde un atelier si les trois critères sont vrais :
  // - le titre en minuscules contient la recherche ;
  // - la catégorie est vide (« Toutes ») ou égale à celle de l’atelier ;
  // - la case est décochée ou l’identifiant figure dans favoris.
  return ateliers; // Remplace ce retour provisoire.
}

function afficher() {
  const visibles = filtrerAteliers();
  // TODO 01b — Vide la liste avec replaceChildren(), puis ajoute une carte
  // par atelier visible. Appelle creerCarte dans une boucle for...of.
  // Affiche le nombre de résultats, ou « Aucun atelier trouvé. » si la liste est vide.
  statut.textContent = 'À toi d’afficher les ateliers (TODO 01).';
}

// TODO 03b — Appelle afficher pendant la saisie (input), quand la catégorie
// change (change) et quand la case est cochée ou décochée (change).

const reessayer = document.querySelector('#reessayer');
const simuler = document.querySelector('#simuler');
const controles = [reessayer, simuler, recherche, categorie, favorisSeuls];

async function charger(url = './data/ateliers.json') {
  for (const controle of controles) controle.disabled = true;
  liste.replaceChildren();
  statut.textContent = 'Chargement des ateliers…';

  try {
    // TODO 02 — Envoie la requête avec await fetch(url).
    // Si reponse.ok est faux, lance une Error avec le statut HTTP dans le message.
    // Lis ensuite le JSON avec await reponse.json(). Vérifie que c’est un tableau.
    // Mets à jour ateliers et appelle afficher(). Le catch et le finally sont fournis.
    afficher(); // Remplace cet appel provisoire avec les instructions ci-dessus.
  } catch (erreur) {
    ateliers = [];
    statut.textContent = erreur.message;
  } finally {
    // finally réactive les contrôles dans les deux cas.
    for (const controle of controles) controle.disabled = false;
  }
}

reessayer.addEventListener('click', () => charger());
simuler.addEventListener('click', () => charger('./data/introuvable.json'));
charger();
