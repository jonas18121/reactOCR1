# Incorporez du style et des assets à votre projet

## Stylez votre app

### Exploitez les classNames 

Comme en HTML, nous pouvons associer des attributs à nos éléments. 
Les attributs HTML tels que `id`, `href`   pour un lien `<a/>`,  `src`   pour une balise `<img />`, fonctionnent normalement en JSX.

`En revanche, il existe des mots réservés en JavaScript, tels que class.`
qui ne fonctionneron pas dans JSX

`Il suffit pour cela d'utiliser l'attribut  className`  , 
et de lui préciser une string. D'ailleurs, 
vous pouvez utiliser plusieurs classes sur un élément en les mettant à la suite, séparées par un espace.

Créons dans `/src` un dossier `/styles` qui va regrouper nos fichiers CSS. 
On peut y glisser `index.css` en n'oubliant pas de modifier le path relatif pour `importer index.css dans  index.js`.

Je crée donc mon fichier `Banner.css` qui va me permettre de styliser mon composant. 
Ce qui nous donne une belle organisation


Dans `Banner.js` , 
je wrappe mon `h1` dans une `div` à laquelle je précise la className  `lmj-banner (“lmj” pour la maison jungle, bien sûr !)` :
puis importez import '../styles/Banner.css' dans `Banner.js`

    import '../styles/Banner.css';

    function Banner() {
        const title = 'La maison jungle';
        return (

            <div className='lmj-banner'>
                <h1>{ title }</h1>
            </div>
        );
    }

export default Banner;


Et retour dans notre fichier  `Banner.css`  , où on crée la classe correspondante :

    .lmj-banner {
        color: black;
        text-align: right;
        padding: 32px;
        border-bottom: solid 3px black;
    }


En React comme dans toutes les librairies et tous les frameworks front, `l'accessibilité du web est essentielle.` 
Elle est nécessaire pour permettre aux technologies d’assistance aux personnes en situation de handicap, notamment, d’interpréter les pages web. 
Pour en savoir plus, je vous conseille “Concevez un contenu web accessible” ( https://openclassrooms.com/fr/courses/6691346-concevez-un-contenu-web-accessible ), un excellent cours sur ce sujet.


## Découvrez l'attribut style

Bonne nouvelle : les éléments React acceptent également l'attribut `style` pour styliser un composant. 
À la différence des éléments HTML, pour lesquels cet attribut est également accepté, 
il faut lui passer un objet en paramètre. 
On appelle cette méthode du inline style.

exemple dans `Banner.js`


    import '../styles/Banner.css';

    function Banner() {
        const title = 'La maison jungle';
        return (

            <div 
                style={{
                    color: 'black',
                    textAlign: 'right',
                    padding: 32,
                    borderBottom: 'solid 3px black'
                }}
            >
                <h1>{ title }</h1>
            </div>
        );
    }

    export default Banner;


Cet attribut `style` peut être pratique pour tester rapidement quelque chose, 
mais il n'est pas recommandé d'en faire une utilisation plus poussée. 
Donc, pour styliser votre application, privilégiez davantage la méthode des classNames, 
ou d'autres méthodes avec des librairies tierces, par exemple.

////////////////////////////////////////////////////////////////////////////////////////////////////////

Ici je vous ai montré la méthode des classNames, combinées avec de simples fichiers CSS, et l'attribut style. 
Ces méthodes restent simples et efficaces. 
Mais sachez qu’il existe de nombreuses autres manières de styliser son application, en utilisant par exemple `les CSS modules intégrés directement par Create React App (en anglais)` ( https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/ ), ou en ajoutant des bibliothèques tierces. 
Vous pouvez par exemple utiliser Sass, ou bien encore (c’est ma technique préférée) le CSS in JS. 
Et même pour ça, il existe également plusieurs manières de faire.

////////////////////////////////////////////////////////////////////////////////////////////////////////


## Utilisez des images

Vous avez peut-être vu le `logo.svg` de React situé dans `/src` ?

Ici, nous allons faire un peu la même chose. Mais commençons par organiser tout ça.

Toujours dans  `/src`, on crée un dossier `/assets` dans lequel on vient mettre notre fichier `logo.png`, que vous pouvez télécharger ici. https://s3-eu-west-1.amazonaws.com/course.oc-static.com/courses/7008001/leaf+1.png

(D'ailleurs j'en profite pour créditer ici le designer Pixel Perfect (https://www.flaticon.com/authors/pixel-perfect))


Pour `l’importer dans votre code`, vous pouvez maintenant faire de la manière suivante. 

Dans  `Banner.js` :

    import logo from '../assets/logo.png'

Vous voyez ici, on déclare en fait une variable logo à laquelle on assigne le contenu de notre image.

Puis vous pouvez l'utiliser dans un élément img, ce qui nous donne pour notre `Banner.js`

    import '../styles/Banner.css';
    import logo from '../assets/leaf+1.png'

    function Banner() {
        const title = 'La maison jungle';
        return (

            <div className='lmj-banner'>
                <img src={ logo } alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>{ title }</h1>
            </div>
        );
    }

    export default Banner;


La propriété  alt   permet ici de respecter les normes d’accessibilité que j’évoquais au dernier chapitre de la première partie. 
C’est une bonne pratique qui donne un texte alternatif pour que les utilisateurs malvoyants accèdent au contenu. 


En ajoutant un peu de CSS (que vous pouvez aller chercher ici (https://github.com/atoulmet/atoulmet-OC-React-Beginners/blob/P2C2-Begin/src/styles/Banner.css)),
me voilà avec la bannière telle que je la voulais, avec mon cart juste en dessous :


## En résumé

- L'attribut `className` permet de `préciser une classe à un élément React` pour lui indiquer du CSS.

- Le fichier CSS correspondant peut être `importé directement` dans un fichier  .js.

- L'attribut `style` permet d'`intégrer du style directement`, on appelle cela du inline style.

- Les `images` sont importées par React grâce à `Webpack`. Il suffit d'importer l'image souhaitée.