
const Utils = {
    formatNumber : (number) => {
        var price = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        return price
    }
}
export default Utils;
