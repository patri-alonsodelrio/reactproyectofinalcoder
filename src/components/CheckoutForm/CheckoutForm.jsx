import './CheckoutForm.css';
import { useState, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';
import { createBuyOrder } from '../../services/firestore';
import InputForm from './InputForm/InputForm';
import emailjs from '@emailjs/browser';


function CheckoutForm() {

    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const navigate = useNavigate();
    const context = useContext(cartContext);
    const { cart, getItemsTotalPrice, emptyCard } = context;

    const handleCheckout = (e) => {
        e.preventDefault();

        const orderData = {
            buyer: dataForm,
            items: cart,
            date: new Date(),
            total: getItemsTotalPrice()
        };
        createBuyOrder(orderData).then((orderid) => {
            emptyCard()
            navigate(`/checkout/${orderid}`);
        });
    }

    function inputChangeHandler(e) {
        let inputName = e.target.name;
        let value = e.target.value;

        const newDataForm = { ...dataForm };
        newDataForm[inputName] = value;
        setDataForm(newDataForm)
    }


    return (
        <div className="form-container">
            <form className='form' onSubmit={handleCheckout}>
                <InputForm
                    containerClass='form-item'
                    labelClass='form-label'
                    inputClass='form-input'
                    value={dataForm.name}
                    handlerOnChange={inputChangeHandler}
                    name='name'
                    type='text'
                    placeHolder='Nombre'
                    labelText='Nombre'
                />

                <InputForm
                    containerClass='form-item'
                    labelClass='form-label'
                    inputClass='form-input'
                    value={dataForm.phone}
                    handlerOnChange={inputChangeHandler}
                    name='phone'
                    type='number'
                    placeHolder='Telefono'
                    labelText='Telefono'
                />

                <InputForm
                    containerClass='form-item'
                    labelClass='form-label'
                    inputClass='form-input'
                    value={dataForm.email}
                    handlerOnChange={inputChangeHandler}
                    name='email'
                    type='text'
                    placeHolder='Email'
                    labelText='Email'
                />
                <button type='submit' className='cartview-button-finish' >Finalizar Compra</button>
            </form>
        </div>
    )
}

export default CheckoutForm;