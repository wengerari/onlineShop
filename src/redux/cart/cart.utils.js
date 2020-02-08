export const addItemToCart = (cartItems, cartItemToAdd) => {
    
    if(cartItems.find(cartItem => cartItem.id===cartItemToAdd.id)){
        return cartItems.map(cartItem => cartItem.id===cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem);
    }
    else{
        return [...cartItems,{...cartItemToAdd, quantity: 1}]
    }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    console.log(cartItems);
    if(cartItems.find(cartItem => cartItem.id ===cartItemToRemove.id).quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !==cartItemToRemove.id);
    }
    else{
        return cartItems.map(cartItem => cartItem.id===cartItemToRemove.id ? {...cartItem,quantity:cartItem.quantity-1} : cartItem);
    }
};