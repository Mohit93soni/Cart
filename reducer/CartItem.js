
const CartItem=(state=[],action)=>{
    switch(action.type){
        case 'ADD_CART':
            return [...state,action.payload]
        case 'REMOVE_CART':
            return state.filter(item=>item.id !== action.payload.id)
    }
    
    return state;
};

export default CartItem;