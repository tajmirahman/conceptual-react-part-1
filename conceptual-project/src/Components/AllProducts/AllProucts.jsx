import Product from "../Product/Product";
import PropTypes from 'prop-types';

const AllProucts = ({ products }) => {
  
    return (
        <div>
            <h1 className="text-3xl">All Products</h1>
            
            <div >
            {
                products.map(product => <div 
                    key={product.id}
                    
                ><Product  product={product}></Product></div>)
            }
            </div>
        </div>
    );
};

AllProucts.propTypes={
    products:PropTypes.object.isRequired,
}


export default AllProucts;