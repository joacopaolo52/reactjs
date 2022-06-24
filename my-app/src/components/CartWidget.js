import './CartWidget.css';
import carrito from '../assets/carrito.png'


function CartWidget() {
    return(
        <img className='cartWidget' src = {carrito} alt= 'Carrito'></img>
    )}

export default CartWidget;