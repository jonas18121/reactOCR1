# Écrivez du code modulaire avec les composants en JSX

Les composants sont essentiels dans React.

Une interface est toujours constituée de différents éléments : 
des boutons, des listes, des titres, des sous-titres. 
Une fois rassemblés, ces éléments constituent une interface utilisateur ou UI. 
Si je prends l’exemple de la maquette de notre site de plantes, 
vous voyez la barre de menu, le panier, et que pour chaque article, 
il y a un nom, une photo, une description.

https://user.oc-static.com/upload/2021/01/18/16109867335116_P1C3-2.png

Avec React, chacune de ces parties qu’on va pouvoir réutiliser correspond à un composant. 
Ils contiennent tout ce qui est nécessaire à leur bon fonctionnement : 
la structure, les styles et le comportement (par exemple, les actions qui sont déclenchées quand on clique dessus).

Les composants nous permettent d’utiliser la même structure de données, et de remplir ces structures avec différents jeux de données. 
Peu importe le nombre de plantes que vous aurez à mettre dans La maison jungle, 
vous pourrez les exploiter pour afficher vos données sans aucun effort. 
Et si dans le futur, vous avez besoin de créer une nouvelle page avec la même présentation, vous pourrez réutiliser le même composant : 
vous vous rendez compte de la puissance des composants ? 💥

C’est donc la mission des développeurs et développeuses React de découper toute interface utilisateur en éléments réutilisables, imbriqués les uns dans les autres. 
La majorité de nos composants sont eux-mêmes créés en combinant d’autres composants plus simples.

## Comprenez de quoi un composant est fait

Vous savez que le HTML est une suite d’instructions que le navigateur doit suivre pour construire le DOM. 
Eh bien, `React vient directement modifier le DOM pour vous` : 
il suffit juste de lui donner les instructions de ce que vous souhaitez faire.

Pour faire simple : `en utilisant React.createElement  , React crée d’abord ses éléments dans le DOM virtuel`, 
puis il vient prévenir le DOM au moment de sa création, “Hé, rajoute-moi une balise h1 avec le texte La maison jungle   dedans”.


## Initiez-vous au JSX

Vous avez découvert que les éléments renvoient des objets avec tout un ensemble de propriétés spécifiques, 
et que React vient les créer avec createElement. 
Mais vous vous doutez que les développeurs React ne manipulent pas ces objets directement.
Non, à la place, ils utilisent le JSX.

Il s’agit de l'extension JavaScript créée par React, 
qui permet d’utiliser notre syntaxe sous forme de tags directement dans le code JavaScript.

Lorsqu’on a ça :

    function Header() {
        return (<div>
            <h1>La maison jungle</h1>
        </div>;)
    }


... et qu’on le réutilise avec `<Header />`  , on pourrait croire qu’il s’agit de HTML. 
Ça a un peu la même tête, mais il s’agit de JSX ! 
Eh oui, JSX est la manière la plus compréhensible d’écrire des composants React dans une application, 
et donc la manière qui est quasiment toujours utilisée. 
Il s'agit d'ailleurs de la spécificité de React : contrairement aux autres frameworks où on écrit du HTML enrichi, 
les équipes de React ont créé le JSX, leur propre syntaxe basée sur JavaScript, qui permet de mêler HTML et JS.

Comme le HTML, le JSX est un langage à balises. `Les touches <, >   et /  de vos claviers vont donc être très souvent utilisées.`


On a bien créé un composant `Header et pas header. `
Il est essentiel de mettre une majuscule à nos composants JSX, 
sinon React ne saura pas qu'il s'agit d'un composant, 
et pensera qu'il s'agit juste d'une balise HTML.

### Composez vos composants

Reprenons notre composant  `<Header />`. Il est un peu tout seul, vous ne trouvez pas ?

On va lui ajouter un composant  `<Description />` :

    function Description() {
        return (<p>Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍</p>;)
    }

Et on le rajoute dans le render :

    ReactDOM.render(<Header /><Description />, document.getElementById("root"))

Quoi ?! Rien ne s’affiche sauf un petit point d’exclamation entouré de rouge : il y a une erreur ! 😤
Pas de panique, c’est normal : deux composants doivent toujours être wrappés dans un seul composant parent.

On peut donc faire :

    ReactDOM.render(<div><Header /><Description /></div>, document.getElementById("root"))

et le problème est résolu.

///////////////////////////////////////////////////////////////////////////////////////////////////////////

React met également à notre disposition un outil, les Fragments, 
si on veut wrapper deux composants dans un seul parent sans que le parent apparaisse dans le DOM. 
Pour ça, vous pouvez faire :

    ReactDOM.render(<React.Fragment><Header /><Description /></React.Fragment>, document.getElementById("root"))

Nos éléments sont bien wrappés, et si vous inspectez votre page, ce parent n'apparaît pas dans le DOM.

///////////////////////////////////////////////////////////////////////////////////////////////////////////

Comme je vous l’ai expliqué, le propre de React est de nous encourager à réutiliser nos composants. 
On va donc structurer notre interface en arborescences de composants.

Regroupons notre Titre et notre Description dans une bannière :

    function Banner() {
        return (<div>
            <Header />
            <Description />
        </div>;)
    }

Vous voyez ? Tout se passe bien comme prévu.

Et nous pourrions également les encapsuler, et les utiliser autant de fois que nous le souhaitons comme ci-dessous :

    <Parent>
        <Enfant />
        <Enfant />
        <Enfant />
    </Parent>

//////////////////////////////////////////////////////////////////////////////////////////////////////////

Vous remarquez d'ailleurs que tous nos composants sont bien fermés. 
En JSX, toutes les balises doivent être fermées, 
y compris les éléments HTML autofermants tels que input. On l'écrira de cette manière 
(en lui ajoutant les attributs souhaités) :

    <input />

//////////////////////////////////////////////////////////////////////////////////////////////////////////

### Maniplez des données dans vos composants JSX

En React, les accolades `{`  et `}` sont également particulièrement utiles. 
Dès qu'il s'agit d'expressions JavaScript, elles sont écrites entre accolades.

Ça nous permet d'appliquer des expressions JavaScript directement dans notre JSX pour : 

- faire des maths :

    < div>La grande réponse sur la vie, l'univers et le reste est { 6 * 7 } </ div>

- modifier des chaînes de caractères :

    < div>{ alexia.toUpperCase() }</ div>

- utiliser des ternaires :

    < div>{ 2 > 0 ? 'Deux est plus grand que zéro' : 'Ceci n'apparaîtra jamais }</ div>}

- Ou même tout simplement pour afficher une variable JS :

    pour une string :  < div>{ myTitle }</ div>
    pour un nombre :  < div>{ 42 }</ div>

Par exemple, si on décide de mettre notre texte de description dans une variable :

    function Description() {
        const text = "Ici achetez toutes les plantes dont vous avez toujours rêvé"
        return (<p>{ text }</p>)
    }

ça s'affiche bien comme prévu.

On va pouvoir appliquer une fonction JavaScript dessus et en mettant quelques emojis à la suite   :

    function Description() {
        const text = "Ici achetez toutes les plantes dont vous avez toujours rêvées"
        const emojis = "🤑🤑🤑"
        return (<p>{ text.slice(0, 11) + emojis }</p>)
    }

## En résumé

Vous êtes venu à bout de ce chapitre sur les composants en JSX ! Bravo à vous. 😎 Maintenant vous savez que :

- une interface utilisateur (ou UI) est `constituée de multiples composants React` qui :

    - sont `réutilisables` ; par exemple, un bouton, un élément dans une liste, un titre,

    - `regroupent` la structure, les styles et le comportement d'un élément,

    - sont `traduits par React` en gros objets, qui sont `ensuite greffés au DOM` ;

- le JSX est une syntaxe créée par React permettant d'écrire du JavaScript. Il faut suivre quelques règles : 

    - `deux composants doivent toujours être wrappés dans un seul composant parent`,

    - les noms des composants `commencent par une majuscule`,

    - les balises des composants `doivent être refermées`.