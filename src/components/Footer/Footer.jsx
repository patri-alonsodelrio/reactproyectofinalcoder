import './Footer.css';
import React from 'react'

function Footer() {
  return (
    <footer>
    <div className='footer-payments'>
      
      <div className=''>
        <h2 className='footer-paytments-text'>Medios de pago</h2>
      </div>
      <div className='footer-payments-img-container'>
            <img src="/assets/payment/visa.png" alt=""/>
            <img src="/assets/payment/amex.png" alt=""/>
            <img src="/assets/payment/mastercard.png" alt=""/>
            <img src="/assets/payment/diners.png" alt=""/>
            <img src="/assets/payment/banelco.png" alt=""/>
            <img src="/assets/payment/tarjeta-naranja.png" alt=""/>
            <img src="/assets/payment/cabal.png" alt=""/>
            <img src="/assets/payment/tarjeta-shopping.png" alt=""/>
            <img src="/assets/payment/mercadopago.png" alt=""/>
            <img src="/assets/payment/argencard.png" alt=""/>
            <img src="/assets/payment/nativa.png" alt=""/>
            <img src="/assets/payment/cencosud.png" alt=""/>
            <img src="/assets/payment/pagofacil.png" alt=""/>
            <img src="/assets/payment/rapipago.png" alt=""/>
        </div>
        </div>
    </footer>
  )
}

export default Footer;