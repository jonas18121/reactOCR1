import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css'

function ShoppingList() {

    const categories = plantList.reduce(
        (accumulator, plant) => 

            // si la catégories est dans la tableau accumulator on l'affiche sinon on la concatène
            accumulator.includes(plant.category) ? accumulator : accumulator.concat(plant.category),
            []
    );

    return (

        // { plant.name } { plant.isBestSale ? <span>:)</span> : null }
        <div>
            <ul>
                {
                    categories.map(
                        (cat) => (
                            <li key={`${ cat }`}>{ cat }</li>
                        )
                    )
                }
            </ul>
            
            <ul className='lmj-plant-list' >
                {
                    plantList.map(
                        (plant) => (
                            <li key={ plant.id } className='lmj-plant-item'>
                                
                                { plant.name } 
                                { plant.isBestSale && <span>🔥</span> }
                                { plant.isSpecialOffer && <div className='lmj-sales' >Soldes</div> }
                            </li>
                        )
                    )
                }
            </ul>
        </div>
        
    );
}

export default ShoppingList