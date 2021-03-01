function Cart()
{
    const plante1 = 'monstera'; 
    const plante2 = 'lierre'; 
    const plante3 = 'bouquet de fleurs'; 

    const monsteraPrice = 8;
    const lierrePrice = 10;
    const fleursPrice = 15;

    return (

        <div>
            <h2>Panier</h2>

            <ul>
                <li>{ plante1 } : { monsteraPrice } €</li>
                <li>{ plante2 } : { lierrePrice } €</li>
                <li>{ plante3 } : { fleursPrice } €</li>
            </ul>
            <p>Total : { monsteraPrice + lierrePrice + fleursPrice } € </p>
        </div>
    );
}

export default Cart;