import { cartContext } from '../../context/CartContext';
import './CartView.css'
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from "react-icons/ai";
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { useContext } from 'react';



function CartView() {

  const context = useContext(cartContext);
  const { cart, deleteItem, emptyCard, getItemsTotalPrice } = context;

  if (cart.length === 0) {
    return <div className='cartview-emptycard-text'><h1>Tu carrito esta vacio...<Link className='cartview-link-home' to={"/"}>Seguir comprando</Link></h1></div>
  }

  return (
    <div className='cartview-container'>
      {cart.map(item => (
        <div className='cartview-item' key={item.id}>

          <div className='cartview-iyt'>
            <img className='cartview-img' src={item.img} alt={item.title} />
          </div>
          <div className='cartview-description'>
            <h2 className='cartview-title'>{item.title}</h2>
            <div className='cartview-description-info'>
              <span className='cartview-price'>${item.price}</span>
              <span className='cartview-count'>Cantidad: {item.values}</span>
              <span className='cartview-button-delete' onClick={() => deleteItem(item.id)}><AiOutlineDelete /></span>
            </div>
          </div>
        </div>
      ))}
      <div className='cartview-total-container'>
        <button className='cartview-button-emptycard' onClick={emptyCard}>Vaciar carrito</button>

      </div>
      <h2 className='cartview-total'>Total: ${getItemsTotalPrice()}</h2>
      <CheckoutForm />
    </div>
  )
}

export default CartView