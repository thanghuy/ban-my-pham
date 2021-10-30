
const CartService ={
    handleCart : (listCart) =>{
        let totalAmount = 0;
        let total = 0;
        listCart.forEach(item => {
            totalAmount += parseInt(item.amount);
            total += (parseFloat(item.amount) * parseFloat(item.price))
        });
        return{
            totalAmount: totalAmount,
            total: total
        }
    },
    handleAddToCart : (listCart, cartItem) =>{
        const listCartItem = [];
        if(listCart.length > 0){
            listCart.forEach(item => {
                if(item.idProduct === cartItem.idProduct){
                    const amountCart = parseInt(item.amount) + parseInt(cartItem.amount);
                    listCartItem.push({
                        ...item,
                        amount: amountCart,
                        total: parseInt(amountCart) + parseInt(item.price)
                    })
                }else{
                    const amountCart = parseInt(item.amount) + parseInt(cartItem.amount);
                    listCartItem.push({
                        ...cartItem,
                        total: parseInt(amountCart) + parseInt(item.price)
                    });
                }
            });
        }
        else{
            listCartItem.push(cartItem);
        }
        return listCartItem;
    },
    handleDeleteToCart : (listCart, idProduct) =>{
        let totalAmount = 0;
        let total = 0;
        listCart.forEach(item => {
            totalAmount += parseInt(item.amount);
            total += (parseFloat(item.amount) * parseFloat(item.price))
        });
        return{
            totalAmount: totalAmount,
            total: total
        }
    }
}
export default CartService;