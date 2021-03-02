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

la `key` permet d'associer une donnée au composant correspondant dans le DOM virtuel qui permettra ensuite de générer les composants. 