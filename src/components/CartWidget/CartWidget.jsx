import './CartWidget.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';
import { useContext } from 'react';

function CartWidget() {
    const { getTotalItemsInCart } = useContext(cartContext);


    return (
        <Link className='detail-cart' to={"/cart"}>
            <div className="cart-container">
                <AiOutlineShoppingCart
                    className='cart-icono' />
                <div className={getTotalItemsInCart() <= 0 ? 'display-none' : 'display'}>{getTotalItemsInCart() > 0 && getTotalItemsInCart()}</div>
            </div>
        </Link>
    )
}

export default CartWidget;