
const CartService ={
    handleCart : (listCart) =>{
        let totalAmount = 0;
        let total = 0;
        if(listCart.length > 0){
            listCart.forEach(item => {
                totalAmount += parseInt(item.amount);
                total += (parseFloat(item.amount) * parseFloat(item.price))
            });
            return{
                totalAmount: totalAmount,
                total: total
            }
        }
        return{
            totalAmount: totalAmount,
            total: total
        }
    },
    handleAddToCart : (listCart, cartItem) =>{
        let listCartItem = Object.assign([],listCart);
        cartItem.total = parseInt(cartItem.amount) * parseFloat(cartItem.price);
        if(listCartItem.length > 0){
            const tmp = listCartItem.find(x => x.idProduct == cartItem.idProduct);
            if(tmp){
                const lstTmp = [];
                listCartItem.forEach(item => {
                    if(item.idProduct == cartItem.idProduct){
                        lstTmp.push({
                            idProduct: item.idProduct,
                            nameProduct: item.nameProduct,
                            slug: item.slug,
                            brand: "thuong hieu 1",
                            image: item.image,
                            price: item.price,
                            amount: parseInt(item.amount) + parseInt(cartItem.amount),
                            total: (parseInt(item.amount) + parseInt(cartItem.amount)) * parseFloat(cartItem.price),
                        })
                    }
                    else{
                        lstTmp.push({
                            idProduct: item.idProduct,
                            nameProduct: item.nameProduct,
                            slug: item.slug,
                            brand: "thuong hieu 1",
                            image: item.image,
                            price: item.price,
                            amount: item.amount,
                            total: parseInt(item.amount) * parseFloat(cartItem.price),
                        })
                    }
                    
                })
                return lstTmp;
            }
            listCartItem.push(cartItem);
            return listCartItem;
        }
        else{
            listCartItem.push(cartItem);
            return listCartItem;
        }
    },
    handleDeleteToCart : (listCart, idProduct) =>{
        const listCartItem = Object.assign([],listCart);
        const tmp = listCartItem.filter(x => x.idProduct !== idProduct)
        return tmp;
    },
    handleUpdateCart: (listCart, idProduct, amount) => {
        let listCartItem = Object.assign([],listCart);
        if(parseInt(amount) > 0){
            const lstTmp = [];
                listCartItem.forEach(item => {
                    if(item.idProduct == idProduct){
                        lstTmp.push({
                            idProduct: item.idProduct,
                            nameProduct: item.nameProduct,
                            slug: item.slug,
                            brand: "thuong hieu 1",
                            image: item.image,
                            price: item.price,
                            amount: amount,
                            total: parseInt(amount) * parseFloat(item.price),
                        })
                    }
                    else{
                        lstTmp.push({
                            idProduct: item.idProduct,
                            nameProduct: item.nameProduct,
                            slug: item.slug,
                            brand: "thuong hieu 1",
                            image: item.image,
                            price: item.price,
                            amount: item.amount,
                            total: item.total,
                        })
                    }
                    
                })
                return lstTmp;
        }
        else{
            const tmp = listCartItem.filter(x => x.idProduct !== idProduct)
            return tmp;
        }
    }
}
export default CartService;