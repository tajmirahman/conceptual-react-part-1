import Product from "../Product/Product";
import PropTypes from 'prop-types';

const AllProucts = ({ products, handleAddToCart }) => {


    return (
        <div>
            <h1 className="text-3xl">All Products</h1>

            <div >
                {
                    products.map(product => <div key={product.id}
                    ><Product
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product></div>)
                }
            </div>
        </div>
    );
};

AllProucts.propTypes = {
    products: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}


export default AllProucts;