# Prenez en main Create React App

## Découvrez Create React App (CRA)

### Comprenez l'importance des outils automatisés

Nous avons appris à utiliser les liens CDN de React, ReactDOM, 
et à paramétrer Babel dans CodePen pour rapidement créer une app React. 
Mais cette technique n'est quasiment pas utilisée dans la vie de tous les jours d'un développeur.

À la place, les développeuses et développeurs utilisent des outils automatisés pour créer une base de code, 
qui dispose des outils essentiels déjà préconfigurés. 
Pour vous citer quelques-unes des fonctionnalités de ces outils, ils permettent de :

- gérer les différentes dépendances (bibliothèques) utilisées par notre app ;

- optimiser le chargement de notre code dans les navigateurs ;

- importer du CSS et des images ;

- gérer les différentes versions de JavaScript ;

- faciliter l'expérience de développement, en rechargeant la page lorsque le code est modifié.

### Découvrez CRA ( Create React App )

Également créé par les équipes de Facebook, 
Create React App (https://github.com/facebook/create-react-app) est un outil qui vous aidera à faire tout ce que je viens de vous citer. 
S'il existe d'autres outils (Next (https://nextjs.org/), Gatsby (https://www.gatsbyjs.com/), Parcel (https://parceljs.org/), etc.), 
Create React App reste la référence, notamment pour les nouveaux utilisateurs de React.

`Create React App` va vous permettre de `générer un squelette de code pour votre application`. 
Il embarque un certain nombre d'`outils préconfigurés`, tels que `Webpack, Babel et ESLint`, 
afin de vous garantir la meilleure expérience de développement possible.

### Installez et lancez CRA ( Create React App )

//////////////////////////////////////////////////////////////////////////////////////////////////////

Pour manipuler Create React App ici, nous allons avoir besoin d'un gestionnaire de paquet (package manager) directement dans le terminal. 
Ici, je vais utiliser yarn  . 
Si vous utilisez une autre version, telle que npm, 
je vous conseille de vous référer au guide d'utilisation de Create React App par Facebook, sur Github (en anglais).
https://github.com/facebook/create-react-app#user-guide

D'ailleurs, si vous voulez en apprendre davantage sur pourquoi choisir npm ou Yarn, 
je vous conseille cet excellent article de blog qui compare les deux. 
https://blog.zenika.com/2017/03/13/npm-vs-yarn/

/////////////////////////////////////////////////////////////////////////////////////////////////////

Pour commencer, placez-vous dans le dossier où vous voulez créer votre projet. 
Personnellement, j'ai créé un dossier workflow  au même niveau que Downloads, Documents, etc., 
dans lequel je mets tous mes projets de code.

Pour initialiser votre projet, nous allons faire :

    npx create-react-app la-maison-jungle

npx :

    - Alors, pas besoin de rentrer dans le détail ici, puisqu'il s'agira de la seule fois où vous allez l'utiliser, mais c'est la commande conseillée par Create React App pour initialiser un projet, sans avoir à installer CRA globalement, ou localement.


## Découvrez les fichiers

Votre environnement de travail est particulièrement important. 
Vous devez vous sentir à l'aise avec les outils que vous utilisez. 
VS Code vous permet d'installer des extensions qui vous offrent des fonctionnalités supplémentaires. 
Typiquement, pour un projet React, les extensions Prettier et ESLint sont très utiles !


Vous trouverez trois dossiers 📁:

- node_modules  : c’est là que sont installées toutes les dépendances de notre code. Ce dossier peut vite devenir très volumineux.

- public  : dans ce dossier, vous trouverez votre fichier index.html et d’autres fichiers relatifs au référencement web de votre page.

- src  : vous venez de rentrer dans le cœur de l’action. L’essentiel des fichiers que vous créerez et modifierez seront là.


Et faisons maintenant un petit tour des fichiers importants 👀 :

- package.json  : situé à la racine de votre projet, il vous permet de gérer vos dépendances 
(tous les outils permettant de construire votre projet), 
vos scripts qui peuvent être exécutés avec yarn, etc. 
Si vous examinez son contenu, vous pouvez voir des dépendances que vous connaissez : React et ReactDOM :

    - vous y trouverez react-scripts, créé par Facebook,  qui permet d’installer Webpack, Babel, ESLint 
    et d’autres pour vous faciliter la vie ;

- dans /public, vous trouvez index.html. Il s'agit du template de votre application. Il y a plein de lignes de code, mais vous remarquez < div id="root"></ div> ? Comme dans les chapitres précédents, nous allons y ancrer notre app React ;

- dans  /src, il y a  index.js  qui permet d’initialiser notre app React ;

- et enfin, dans  /src, vous trouvez  App.js  qui est notre premier composant React.


//////////////////////////////////////////////////////////////////////////////////////////////////////

Je vois  dependencies  et  devDependencies. Mais c'est quoi la différence entre les deux ?
En fait, les  dependencies  sont des dépendances qui sont nécessaires à notre code pour fonctionner, 
aussi bien en local qu'en production. 
En revanche, les  devDependencies sont uniquement nécessaires pour la phase de développement. 
Les deux sont installées depuis votre package manager, pour nous yarn, en précisant une option différente : 
yarn add  pour les dependencies, et  yarn add --dev   pour les  devDependencies.

//////////////////////////////////////////////////////////////////////////////////////////////////////


Deux fichiers que nous n'utiliserons pas directement mais qui ne font pas de mal à garder :

- le README.md   qui permet d’afficher une page d’explication si vous mettez votre code sur GitHub, par exemple ;

- et le fichier .gitignore   qui précise ce qui ne doit pas être mis sur GitHub, typiquement le volumineux dossier des node_modules.

### Prenez en main votre app avec les commandes

Lorsque vous vous trouvez à la racine de votre projet, vous pouvez exécuter `yarn start` qui va démarrer votre application en mode développement.

Cela vous donne quelque chose comme ça (même si votre adresse IP sera très probablement différente).

Un onglet a dû s'ouvrir dans votre navigateur à l'URL `http://localhost:3000/` . Si ce n'est pas le cas, ouvrez-le vous-même.

Et tadaa ! 🎉🎉🎉
Vous avez le magnifique logo de React qui tourne dans votre navigateur !


///////////////////////////////////////////////////////////////////////////////////////////////////////////

Il existe d'autres commandes :

- yarn run build   vous permettra de créer un build  avec votre code transformé et minifié, si vous devez déployer votre application en production (la mettre en ligne, par exemple) ;

- yarn test  pour exécuter les tests.

Vous pouvez d'ailleurs créer vos propres commandes si vous les ajoutez dans la partie scripts.

///////////////////////////////////////////////////////////////////////////////////////////////////////////

## Organiser votre code

Nous allons maintenant `modifier notre base de code` pour qu'elle soit plus à l'image de notre projet. 
Il existe plusieurs manières d'organiser son code, et il est important de réfléchir à comment l'organiser. 
Ici, nous allons séparer les fichiers selon leur type : composants/style/images, etc.

On va commencer par créer un dossier  `/components` dans `/src`, où nous mettrons tous nos composants. 
On y glisse `App.js` et on en profite pour changer le chemin d'import dans  index.js.

Maintenant, `créons notre Banner` du chapitre précédent dans un fichier JavaScript à part que nous pouvons appeler  `banner.js`.

dans `banner.js`

    function Banner() {
        return <h1>La maison jungle</h1>
    }

    export default Banner

Vous remarquez la notation  export default. 
Il s'agit d'une syntaxe prévue dans l'ES6, qui vous épargnera d'utiliser les accolades au moment de l'import. 

Félicitations ! Vous avez réutilisé votre code du chapitre précédent !


Je l’ai déjà mentionné, mais ici, c’est Webpack (https://webpack.js.org/) qui nous permet d’importer notre composant aussi facilement, avec import. 
Cet outil particulièrement utile est essentiel pour lier les fichiers entre eux, afin qu’ils soient interprétés par le navigateur. 
Et dire que Create React App nous a permis de l’installer sans faire aucune configuration. Si ça c’est pas de la chance ! 🍀

## En Résumé

- Les développeurs utilisent des outils automatisés pour faciliter leur expérience de développement.

- Create React App (CRA) est la boîte à outils créée par Facebook, qui reste encore la référence pour initier un projet React.

- Un projet initialisé avec CRA possède toujours : 

    - un fichier index.html   qui est le template où vivra notre app React ;

    - un package.json   qui liste les dépendances et les scripts ;

    - un fichier index.js   dans lequel notre app React est initialisée, et greffée au HTML.

- CRA s'exécute avec l’aide d’un gestionnaire de paquet (dans ce cours, yarn).

- Webpack permet d'importer simplement les fichiers entre eux.