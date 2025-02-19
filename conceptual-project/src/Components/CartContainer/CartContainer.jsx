import Phone from '../Phone/Phone';
import Watch from '../Watch/Watch';
import './CartContainer.css'
import PropTypes from 'prop-types';

const CartContainer = ({handleCartButton, isActive,carts,handleDeleteCart}) => {
    // console.log(isActive);

    // const {cart,status}=isActive;

    return (
        <div >
            <h1 className="text-3xl">Cart Container Slot</h1>

            <div className='flex gap-2 mt-6'>
                <button className={`${isActive.cart?'btn active':'btn'}`} onClick={()=>handleCartButton('about')}>Phone</button>
                <button className={`${isActive.cart?'btn':'btn active'}`} onClick={()=>handleCartButton('contact')}>Watch</button>
            </div>


            {
                isActive.cart?<Phone handleDeleteCart={handleDeleteCart} carts={carts}></Phone>:
                <Watch></Watch>
            }

        </div>
    );
};


CartContainer.propTypes={
    handleCartButton:PropTypes.object.isRequired,
    isActive:PropTypes.object.isRequired,
    carts:PropTypes.object.isRequired,
    handleDeleteCart:PropTypes.func.isRequired
    
}

export default CartContainer;