import React, { useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';

function ItemDetail({ product }) {

    const [isInCart, setIsInCart] = useState(false);

    const { addItem } = useContext(cartContext);
    const handleAddToCart = (values) => {
        addItem(product, values)
        setIsInCart(true);
        toast.success(`Agregaste al carrito ${values} Funkos`, {
            position: "top-left",
            autoClose: 800,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: "agregar-carrito",
        });
    }

    return (
            <div className='detail-container'>
                <div className='detail-img-container'>
                    <h2 className='detail-title'>{product.title}</h2>
                    <img className='detail-img' src={product.img} alt={product.title} />
                </div>
                <div className='detail-buy'>
                    <h2 className='detail-price'>$ {product.price}</h2>
                    {
                        isInCart ? <Link className='detail-cart-link' to={"/cart"}>Ir al carrito</Link> : <ItemCount onAddToCart={handleAddToCart} />
                    }
                    <ToastContainer />
                </div>
            </div>
    )
}

export default ItemDetail;

