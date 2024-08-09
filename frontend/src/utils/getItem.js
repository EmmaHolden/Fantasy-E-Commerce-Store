export const getItem = (id, cart, stock) => {
    let cartItem = cart.find(cartitem => cartitem.identityNumber === id);
    let stockItem = stock.find(stockItem => stockItem._id === id);  
    return {cartItem, stockItem}
}