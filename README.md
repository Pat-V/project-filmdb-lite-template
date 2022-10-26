# Projet FilmDB CLI

_Destiné aux stagiaires ayant des difficultés en JS_

Votre objectif est de créer un outil en ligne de commande permettant de gérer la collection de films que vous avez sur votre ordinateur.
L'outil permettra d'obtenir la liste des ses films, d'en ajouter, modifier et supprimer.
Il permettra également d'effectuer une recherche selon les différentes propriétés d'un film, et d'ouvrir le fichier vidéo associé à un film.

## Technologies

- Recommandation pour faire simple : stocker les films dans un fichier JSON

Déjà installés :

- Jest `npm test`
- ESlint, Prettier
- Babel, Babel-node, pour utiliser une syntaxe moderne sans soucis. `npx babel-node fichier.js` pour exécuter un fichier particulier avec babel.
- Le module chalk, pour écrire en couleurs dans la console
- Le module prompts, pour poser des questions dans la console (essaye npm start !)

## Fonctionnalités essentielles

- Stocker un ensemble de films
  - Nom, Année, Miniature, emplacement du fichier vidéo, liste d'acteurs, synopsis, genre, réalisateur

Ligne de commande version 1:

- Permettre de lister tous les films
- Permettre de lister tous les films correspondant à un critère (nom, année, genre, acteur, réalisateur)

Ligne de commande version 2:

- Permettre de créer un film
- Permettre de supprimer un film
- Permettre de modifier un film

## Fonctionnalités supplémentaires (idées, n'hésitez pas à implémenter les votres)

- Commande permettant d'ouvrir le fichier vidéo associé à un film
- Commande permettant d'obtenir des statistiques sur sa collection de films
  - Nombre total et nombre par genre
  - Réalisateur le plus et le moins populaire
  - Acteur le plus et le moins populaire
  - Genre le plus et le moins présent

## Barème et notation

- Le plus important est la qualité du code et la qualité des tests. Préférez implémenter moins de fonctionnalités mais mieux.

| Topic                   | Points     |
| ----------------------- | ---------- |
| Project features        | 8          |
| Unit tests              | 4          |
| E2E & Integration tests | 4          |
| Code quality : naming   | 1          |
| Code quality : general  | 3          |
| Git usage               | +2 (Bonus) |
