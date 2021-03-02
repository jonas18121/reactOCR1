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