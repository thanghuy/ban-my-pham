
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
    }
}
export default CartService;