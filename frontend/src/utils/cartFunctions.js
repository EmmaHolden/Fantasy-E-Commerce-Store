export async function addHandler(stockItem, cart, setCart){
    let product = {
        identityNumber: stockItem._id,
        numberSelected: 1,
        subTotal: 1 * stockItem.price
    }
    let newCart = [...cart]
    newCart.push(product)
    setCart(newCart)
    }    

export async function  deleteHandler(cartItem, cart, setCart){
    let newCart = cart.filter(item => item.identityNumber !== cartItem.identityNumber )
    setCart(newCart)
} 

export async function deleteAllHandler(setCart){
    setCart([])
}

export async function increaseQuantity(cartItem,stockItem, cart, setCart){
    let newCart = [...cart]
    cartItem.numberSelected += 1;
    cartItem.subTotal += stockItem.price;
    setCart(newCart)
}

export async function decreaseQuantity(cartItem, stockItem, cart, setCart){
    if (cartItem.numberSelected > 1) {
        let newCart = [...cart]
        cartItem.numberSelected -= 1;
        cartItem.subTotal -= stockItem.price;
        setCart(newCart)
    }

}
