import { plantList } from '../datas/plantList';

/* const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmer'
]; */

/**
 * .reduce() = https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 * .includes() = https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 * .concat() = https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 */
function ShoppingList() {

    const categories = plantList.reduce(
        (accumulator, plant) => 

            // si la catégories est dans la tableau accumulator on l'affiche sinon on la concatène
            accumulator.includes(plant.category) ? accumulator : accumulator.concat(plant.category),
            []
    )
    
    return (
        <di>

            <ul>
                {
                    categories.map(
                        (cat) => (
                            <li key={`${ cat }`}>{ cat }</li>
                        )
                    )
                }
            </ul>
            
            <ul>
                {
                    plantList.map(
                        (plant, index) => (
                            <li key={`${ plant.name }-${ index }`}>{ plant.name }</li>
                        )
                    )
                }
            </ul>
        </di>
    );
}

export default ShoppingList


/*
https://github.com/atoulmet/atoulmet-OC-React-Beginners/blob/P2C3-Solution-1/src/components/ShoppingList.js


Sur la branche P2C3-Begin-1 , vous trouverez la base de code nécessaire pour commencer l'exercice. Vous verrez dans  ShoppingList.js   une liste de plantes importée depuis  /datas   qui s'appelle  plantList, et qui comporte des catégories pour chacune des plantes.

À partir de cette liste de plantes, vous devrez :

Constituer une nouvelle liste de manière dynamique qui extrait les catégories uniques de plantes (que nous utiliserons également plus tard). 

Il existe plusieurs solutions pour créer une liste d'éléments uniques, mais je vous conseille de vous pencher sur la méthode reduce()  ou bienforEach().

Afficher la liste des catégories de plantes au-dessus de la liste des plantes à vendre.
*/