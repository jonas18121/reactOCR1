# Gagnez en temps et en efficacité grâce aux listes et aux conditions

## Itérez sur votre contenu 

En code, vous serez très souvent confronté à des listes de données qui présentent la même structure. 
Bonne nouvelle ! ✨ Pas besoin de vous faire des crampes à force de copier-coller : 
vous pouvez `directement itérer sur votre contenu et générer des composants React dessus.`

### Découvrez votre allié : map()

La méthode JavaScript `map()` passe sur chaque élément d'un tableau. 
Elle lui applique une fonction, et renvoie un nouveau tableau contenant les résultats de cette fonction appliquée sur chaque élément.

Par exemple, pour une fonction qui doublerait la valeur d'un élément, cela donne :

    const numbers = [1, 2, 3, 4]
    const doubles = numbers.map(x => x * 2) // [2, 4, 6, 8]

Dans notre cas, elle va nous permettre de `prendre une liste de données, et de la transformer en liste de composants`.


/////////////////////////////////////////////////////////////////////////////////////////////////////////

La méthode  map()  permet facilement d'itérer sur des données et de retourner un tableau d'éléments. Comme elle, les méthodes  forEach(),  filter(),  reduce(), etc., qui permettent de manipuler des tableaux, seront également vos alliés en React.


/////////////////////////////////////////////////////////////////////////////////////////////////////////

On va donc créer un composant  ShoppingList.js   pour notre magasin de plantes.

Dans ce fichier, on déclare une variable plantList qui `contient notre liste de plantes` :

dans ShoppingList.js

    const plantList = [
        'monstera',
        'ficus lyrata',
        'pothos argenté',
        'yucca',
        'palmier'
    ]

    function ShoppingList() {
        return (
            <ul>
                {plantList.map((plant) => (
                    <li>{plant}</li>
                ))}
            </ul>
        )
    }

    export default ShoppingList

pour chaque entrée du tableau, on retourne un élément  `<li>`
On importe ShoppingList.js dans  `<App />`



### Précisez votre key 

les `key` (clés) aident React à `identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés`. 
Vous devez donner une clé à chaque élément dans un tableau, afin d’apporter aux éléments une identité stable.

Si vous voulez éviter les bugs, une  key  doit impérativement respecter deux principes :

- Elle doit être unique au sein du tableau. 

- Et stable dans le temps (pour la même donnée source, on aura toujours la même valeur de key=).

la `key` permet d'`associer une donnée au composant correspondant dans le DOM virtuel` qui permettra ensuite de générer les composants. 


///////////////////////////////////////////////////////////////////////////////////////////////////

Si votre key n'est pas unique ou bien change dans le temps, 
votre DOM virtuel risque de confondre les données entre elles – notamment si un élément venait à être inséré dans la liste, ou bien supprimé de la liste ! 

///////////////////////////////////////////////////////////////////////////////////////////////////



Nous avons plusieurs méthodes pour générer une `key` unique :

- La méthode la plus simple et la plus fiable consiste à `utiliser l'id associée à votre donnée` dans votre base de données.

- Vous pouvez également trouver un moyen d'`exploiter la valeur de la donnée`, si vous avez la certitude qu'elle sera toujours unique, et stable dans le temps.

- En dernier recours, vous pouvez `définir une string et la combiner avec l'index` de la data dans votre tableau.

Dans notre cas, puisqu'il n'y a pas d'id associée, 
on peut faire une combinaison entre l'index et le nom de la plante qui est une string :

dans `ShoppingList.js`

    function ShoppingList() {
        return (
            <ul>
                {plantList.map((plant, index) => (
                    <li key={`${plant}-${index}`}>{ plant }</li>
                ))}
            </ul>
        )
    }

    export default ShoppingList


## Contextualisez le contenu de vos composants

React nous permet de faire des listes de composants : 
un gain de temps énorme dans votre vie de développeur. 
Mais ce n'est pas tout !Le JSX nous permet également d'`afficher des éléments de manière conditionnelle dans nos composants.`

### Créez des conditions dans le JSX 

Dans notre liste de plantes  `plantList.js`, je vais `rajouter une catégorie` isBestSale `correspondant à un ` booléen qui nous indique si notre plante fait partie des meilleures ventes. 
Ce qui nous donne pour le premier élément 

Maintenant que nous avons notre booléen, nous allons `utiliser un ternaire pour afficher un emoji en fonction.` Dans  `ShoppingList.js`, au niveau de l'affichage du nom, je rajoute :

dans `plantList.js`

    export const plantList = [
        {
            name: 'monstera',
            category: 'classique',
            id: '1ed',
            isBestSale: true
        },
        {
            name: 'ficus lyrata',
            category: 'classique',
            id: '2ab',
            isBestSale: false
        },
        {
            name: 'pothos argenté',
            category: 'classique',
            id: '3sd',
            isBestSale: false
        },
        {
            name: 'yucca',
            category: 'classique',
            id: '4kk',
            isBestSale: false
        },
        {
            name: 'olivier',
            category: 'extérieur',
            id: '5pl',
            isBestSale: false
        },
        {
            name: 'géranium',
            category: 'extérieur',
            id: '6uo',
            isBestSale: false
        },
        {
            name: 'basilique',
            category: 'extérieur',
            id: '7ie',
            isBestSale: false
        },
        {
            name: 'aloe',
            category: 'plante grasse',
            id: '8fp',
            isBestSale: false
        },
        {
            name: 'succulente',
            category: 'plante grasse',
            id: '9vn',
            isBestSale: false
        }
    ]


Dans  `ShoppingList.js`

    import { plantList } from '../datas/plantList';

    function ShoppingList() {

        return (
            <ul>
                {
                    plantList.map(
                        (plant) => (
                            <li key={ plant.id }>
                                { plant.name } { plant.isBestSale ? <span>🔥</span> : null }
                            </li>
                        )
                    )
                }
            </ul>
        );
    }

    export default ShoppingList


`On peutaussi utiliser  &&.`

Indiquée entre accolades, `&&` précède un élément JSX et précise que l'élément ne sera généré seulement si la condition est respectée. On peut donc écrire :


Dans  `ShoppingList.js`

    import { plantList } from '../datas/plantList';

    function ShoppingList() {

        return (
            <ul>
                {
                    plantList.map(
                        (plant) => (
                            <li key={ plant.id }>
                                
                                { plant.name } { plant.isBestSale && <span>🔥</span> }
                            </li>
                        )
                    )
                }
            </ul>
        );
    }

    export default ShoppingList


///////////////////////////////////////////////////////////////////////////////////////////////////

Vous pouvez d'ailleurs chaîner les conditions.

Si par exemple, vous vouliez afficher le 🔥 pour les plantes qui sont des  isBestSale   ET dans la category classique :

    //traduction : si plant.isBestSale =  true et  plant.category = classique, on affiche la flamme sinon on affiche rien

    {plant.isBestSale && plant.category === "classique" && <span>🔥</span>}

De la même manière, si vous aviez voulu que le 🔥 s'affiche à côté des plantes qui sont  isBestSale   OU dans la category classique :

    {plant.isBestSale || plant.category === "classique" && <span>🔥</span>}

Mais gare à la propreté du code. Si vous avez trop de conditions, je vous conseille de les sortir de ce qui est retourné par votre fonction. 😉

///////////////////////////////////////////////////////////////////////////////////////////////////

### Ouvrez-vous à d'autres méthodes

React est particulièrement flexible : il existe d'autres méthodes permettant de contextualiser votre contenu.

## En résumé

- À partir d’une liste de données,  map()   permet de créer une liste de composants React.

- La prop  key   est indispensable dans les listes de composants.

- Si vous voulez éviter les bugs, la prop  key   doit : 

- être unique au sein de la liste ;

- perdurer dans le temps.

- La best practice pour créer une  key   est d’utiliser l’ id   unique associée à une donnée, et de ne pas vous contenter d'utiliser l'index de l'élément dans la liste.

- Une condition ternaire permet d’afficher un élément ou un autre dans le JSX, répondant à la condition "if… else...".

- Il existe d'autres manières de créer des conditions en React, notamment en sortant les conditions du JSX.