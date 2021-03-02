const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmer'
];

function ShoppingList() {
    
    return (
        <ul>
            {plantList.map(
                (plant) => (
                    <li>{ plant }</li>
                )
            )}
        </ul>
    );
}

export default ShoppingList