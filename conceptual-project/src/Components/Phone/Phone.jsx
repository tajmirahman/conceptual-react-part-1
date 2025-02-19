import PropTypes from 'prop-types';

const Phone = ({ carts, }) => {
    console.log(carts);
    return (
        <div>
            <h1 className="text-2xl">Phone slot</h1>
            <div>
                {
                    carts.map(cart => <div className='m-2' key={cart.id}>
                        <div className='flex justify-center items-center gap-4'>
                            <img className="w-20 h-20 " src={cart.image} alt="" />
                            <p>{cart.category}</p>
                            <p>{cart.price}</p>
                            <button className='btn'>delete</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

Phone.propTypes = {
    carts: PropTypes.object.isRequired,
}

export default Phone;