# Exercice de synthèse · Catalogue d’ateliers

**Durée indicative : 1 h 45.** Tu dois rendre fonctionnel le catalogue à partir des fichiers fournis. Tu modifies `script.js` et `stockage.js`. L’interface HTML et les données sont déjà prêtes.

Ouvre le dossier dans VS Code. Lance `npm start` avec Node.js installé, puis ouvre l’adresse affichée. Tu peux aussi lancer `index.html` avec Live Server. Garde la console ouverte et recharge après chaque modification.

## 1. Afficher les cartes · 20 min

Complète les TODO 01a et 01b. Une carte est un élément `li` avec un titre, la catégorie et la durée. Reconstruis la liste à chaque affichage. Demande-toi ce qui arrive si tu oublies de vider la liste avant d’ajouter les cartes.

**À vérifier.** Deux cartes s’affichent avec les données de départ. La première indique « HTML · 35 min ». Le compteur indique deux ateliers.

## 2. Charger les données · 25 min

Complète le TODO 02. Récupère le fichier JSON avec `fetch`. Traite le statut HTTP avant de tenter de lire le corps de la réponse. Si la réponse est valide, remplace les ateliers en mémoire et affiche-les.

**À vérifier.** Au rechargement, cinq cartes s’affichent. « Simuler une erreur HTTP » vide la liste et affiche un message contenant `404`. « Réessayer » réaffiche les cinq cartes.

## 3. Combiner les filtres · 20 min

Complète les TODO 03a et 03b. Fais passer chaque atelier par les trois conditions. Branche les événements pour recalculer la liste dès qu’un contrôle change.

**À vérifier.** Sélectionner CSS affiche deux cartes. Avec CSS sélectionné, saisir «  GRILLE  » affiche seulement « Créer une grille responsive ». Choisir HTML en gardant la recherche affiche « Aucun atelier trouvé. ».

## 4. Ajouter et retirer des favoris · 20 min

Complète les TODO 04a et 04b. Mémorise les identifiants en mémoire. Un deuxième clic sur un favori doit le retirer. Mets à jour l’état visuel du bouton avec `aria-pressed`.

**À vérifier.** Efface la recherche et sélectionne « Toutes ». Ajoute Grid en favori et coche « Favoris uniquement ». Une seule carte reste. Retire le favori et vérifie que la liste devient vide.

## 5. Retrouver les favoris après F5 · 20 min

Complète les TODO dans `stockage.js`. Sauvegarde le tableau sous forme de texte JSON. Quand la page démarre, lis le texte et reconstruis le tableau.

**À vérifier.** Ajoute Grid en favori, recharge, puis recoche « Favoris uniquement ». Grid est encore présent. Dans la console, lance `localStorage.setItem('forge-synthese-favoris', '{')` puis recharge. La page doit fonctionner et aucun favori ne doit être sélectionné. Répète avec la valeur `'null'`.

## À rendre

Tes deux fichiers JavaScript complétés. Prépare-toi à expliquer comment une saisie déclenche le rendu, et pourquoi la liste des favoris reste disponible après un rechargement.
