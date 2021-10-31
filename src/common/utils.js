
const Utils = {
    formatNumber : (number) => {
        var price = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        return price
    },
    convertTitle:(path) => {
        switch(path){
            case "/": return false;
            case "/gio-hang": return "Giỏ hàng";
            case "/don-hang": return "Đơn hàng";
            case "/lien-he": return "Liên hệ";
            case "/gioi-thieu": return "Giới thiệu";
            case "/san-pham": return "Sản phẩm";
        }
    }
}
export default Utils;
