# Débutez avec React

## Appréhendez la logique de React

On appelle framework front-end tout ensemble de classes, 
fonctions et utilitaires qui nous facilite la création d'applications web. 
Ces outils sont compatibles avec tous les navigateurs.

Plus généralement, le but est d'éviter de réinventer la roue pour n'importe quel besoin classique d'une application :
gestion de l'interface utilisateur, des événements, du DOM, des formulaires, 
de l’évolution dans le temps des données manipulées par l'interface, etc. 
En plus, initialiser une base de code avec un framework simplifie non seulement votre prise de marques, 
mais aussi l’intégration d’une nouvelle personne sur la codebase.


### React

React est un projet open-source, distribué sous la licence MIT et piloté par Facebook. 
Leurs produits web et mobile tels que Facebook, Messenger, Instagram, reposent en grande partie sur cette technologie. 
Comme React est open-source, vous pouvez accéder au code source directement sur GitHub (https://github.com/facebook/react), proposer une feature, ou même notifier d'un problème (issue).

L'ambition de React est de créer des interfaces utilisateurs, avec un outil rapide et modulaire. 
L'idée principale derrière React est que vous construisiez votre application à partir de composants.
Un composant regroupe à la fois le HTML, le JS et le CSS, créés sur mesure pour vos besoins, et que vous pouvez réutiliser pour construire des interfaces utilisateurs.

`Un composant = HTML + CSS + JS.`

### React, framwork ou bibliothèque

sur sa documentation, React se présente comme "une bibliothèque JavaScript pour créer des interfaces utilisateurs". 
Pourtant, depuis tout à l'heure je vous parle de framework. 
🤔 En fait, la frontière entre framework et bibliothèque reste assez fine, surtout dans le cas de React ; 
et il n'est pas simple de séparer parfaitement l'un de l'autre.

Pour faire simple, vous pouvez vous dire qu'un framework est un ensemble d'outils ultra complets, 
permettant de créer une application de A à Z et fournissant tous les outils nécessaires au développement d'une application. 
Alors qu'une bibliothèque s'ajoute à une partie de votre application. 

Angular, par exemple, qui permet de créer une solution complète où tous les outils sont déjà fournis, 
comme une solution dédiée au routing ou bien aux appels API, est un framework, 
pour lequel on attend de vous de respecter une certaine architecture.

En revanche, avec une bibliothèque, tout est beaucoup plus flexible. 
La bibliothèque vous fournit un ensemble de ressources que vous pouvez combiner avec d'autres  bibliothèques pour construire votre application.

À proprement parler, React… est une bibliothèque. Mais son écosystème est tellement développé maintenant 
qu'on peut aussi bien le considérer comme un framework à part entière ! 
🙃 Ici, j'utiliserai le terme de bibliothèque pour parler de React, 
mais je ne me formalise pas si j'entends quelqu'un utiliser le terme de framework.

### Le DOM

Le DOM (Document Object Model), est généré par votre navigateur depuis le HTML pour afficher une page. 
Il correspond à une sorte d'arbre de nœuds. 
Vous pouvez d'ailleurs manipuler votre DOM dans l'outil "Elements" des Developpers Tools de votre navigateur.

React lui-même ne manipule pas directement le DOM du navigateur. 
À la place, React génère un DOM virtuel, distinct du DOM des navigateurs. 
Au moment venu, il réconcilie ce DOM virtuel avec le DOM du navigateur, en prenant soin de minimiser le nombre d'opérations nécessaires. 
C’est ce qui nous permet d’avoir de super performances, et d’utiliser React dans de nombreux contextes, 
et pas seulement au sein du navigateur même, typiquement les applications mobiles natives, etc.


## Créez votre premier composant

Après avoir mis le lien CDN de react et de babel dans notre html ( https://fr.reactjs.org/docs/cdn-links.html , https://babeljs.io/docs/en/babel-standalone )

Écrivons maintenant notre premier composant. 

Ici, je vais utiliser des composants qu’on appelle functional components (composants fonction), 
c’est-à-dire une fonction qui retourne un élément React. 
Nous rentrerons un peu plus dans le détail des composants au chapitre suivant.

Commençons avec cette première fonction, MyComponent :

    function MyComponent() {
        return (<div>Hello OpenClassrooms 👋</div>;)
    }


Ici, nous avons déclaré un composant avec une fonction classique. 
Mais notez que vous pouvez aussi bien utiliser des fonctions fléchées qui s’écriraient 
`const MyComponent = () => div />`


Attachez React à votre HTML
On va dès maintenant utiliser ReactDOM pour s'attacher à notre HTML.

Dans le snippet ci-dessous, l’id react-goes-here  permet de préciser où notre app React va vivre dans notre HTML. Ensuite, on va ordonner à ReactDOM de générer (render) notre composant React qui s’appelle MyComponent.

    ReactDOM.render(<MyComponent />, document.getElementById("react-goes-here"))


### Choisissez votre camp : classes ou fonctions ?

Il existe différentes manières de créer des composants en React. 
Il y a peu de temps encore, la manière la plus utilisée était d’utiliser des composants classes, avec la syntaxe :

    class MyComponent extends React.Component

Cette manière était la seule pour utiliser des fonctionnalités qui sont au cœur de React. 
Mais depuis la mise à jour de React 16.8 en 2019, 
les composants fonctions permettent aussi de gérer tout ça. 

Résultat : ils sont de plus en plus fréquents, et il est encouragé de les utiliser. 
Cela pour plusieurs raisons : ils requièrent d'écrire moins de code, 
ils sont plus simples à comprendre, donc plus faciles à tester, à relire, et à réutiliser. 
C’est pourquoi ce cours utilise uniquement des composants fonctions.

## en résumé

- Un framework JS est un ensemble de classes, fonctions et utilitaires qui nous facilitent la création d’applications pour les navigateurs ou mobiles.

- L’un des outils les plus populaires, React, qui est une bibliothèque aussi bien qu’un framework, permet de créer des interfaces utilisateurs. 

- L’approche technique de React est de créer du code modulaire, à base de composants réutilisables.

- Trois des avantages de React sont sa communauté, sa documentation et ses opportunités professionnelles.

- Vous savez maintenant comment transformer un simple fichier de HTML en React – et avez créé votre premier composant !