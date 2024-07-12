## Introduction
    L'application web éducative vise à fournir une plateforme intégrée pour les enseignants et les élèves. Elle permet aux enseignants de publier des cours et des compléments de cours, de créer et de publier des quiz, et de suivre et évaluer la progression des élèves grâce à des analyses détaillées. Pour les élèves, l'application offre des outils pour suivre les cours, pratiquer les leçons à travers des devoirs, passer des quiz, et interagir avec les enseignants pour clarifier leurs doutes.

### Fonctionnalités Clés
## Gestion des Cours
 - Création de Cours: Les enseignants peuvent créer des cours et des compléments de cours, les organiser par sujets, et les publier pour les élèves.
 - Attribution des Cours: Les cours peuvent être attribués à des classes spécifiques pour une organisation structurée.
## Gestion des Quiz et Devoirs
 - Création de Quiz: Les enseignants peuvent créer des quiz pour évaluer le niveau de compréhension des élèves.
 - Attribution de Devoirs: Les enseignants peuvent attribuer des devoirs pour aider les élèves à pratiquer les leçons.
## Analyses et Suivi
 - Analyse de Progression: Fournir des analyses détaillées pour les enseignants afin de suivre la progression de chaque élève et de chaque classe.
 - Suivi des Élèves: Permettre aux élèves de suivre leur propre progression et de voir comment ils se débrouillent dans leurs études.
## Interaction Élèves-Enseignants
 - Questions au Tuteur: Les élèves peuvent poser des questions aux tuteurs pour obtenir des explications supplémentaires.
 - Commentaires aux Professeurs: Les élèves peuvent envoyer des commentaires aux professeurs pour se renseigner sur divers aspects des cours.
 ## Gestion des Utilisateurs
 - Création de Comptes: Les administrateurs peuvent créer des comptes utilisateurs et définir les autorisations d'accès.
 - Gestion des Classes: Les administrateurs peuvent créer et gérer des classes pour regrouper les élèves.

## User Stories
### #Élèves
- Accès aux classes et suivi des cours.
- Pratique des leçons à travers les devoirs.
- Évaluation du niveau d’apprentissage via les quiz.
- Interaction avec les tuteurs pour clarifications.
- Envoi de commentaires aux professeurs.

### #Enseignants
- Création et attribution de cours.
- Assignation de devoirs et quiz.
- Consultation des analytiques de progression des élèves.

### #Administrateurs
- Création de comptes utilisateurs et gestion des autorisations d’accès.
- Création et gestion des classes.
- Consultation du niveau d’apprentissage des élèves.

## Architecture Technique
L'application sera construite en utilisant une architecture moderne de type MVC (Modèle-Vue-Contrôleur) pour assurer une séparation claire des préoccupations. Les technologies suivantes seront utilisées :
### #Front-End:
Technologies: React, CSS
Description: React est utilisé pour la création d'interfaces utilisateur dynamiques et réactives. CSS est utilisé pour le style et la mise en page.
### #Back-End:
Technologies: Flask
Description: Flask, un micro-framework Python, est utilisé pour la gestion de la logique métier, la gestion des requêtes HTTP, et la connexion à la base de données.
### #Base de Données:
Technologie: MySQL
Description: MySQL est utilisé pour le stockage des données de l'application, y compris les informations sur les utilisateurs, les cours, les quiz, et les résultats.
### #Hébergement:
Service: Render
Description: AWS est utilisé pour l'hébergement de l'application, offrant une infrastructure scalable et fiable.


## Conclusion
Cette documentation fournit une vue d'ensemble des fonctionnalités et des exigences techniques de l'application web éducative. Elle sert de guide pour le développement et la mise en œuvre d'une plateforme efficace et sécurisée qui répond aux besoins des enseignants et des élèves. Pour toute question ou pour plus de détails techniques, veuillez contacter l'équipe de développement.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
