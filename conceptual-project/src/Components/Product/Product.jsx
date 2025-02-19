import PropTypes from 'prop-types';

const Product = ({product,handleAddToCart}) => {
  
    const {image,title,price,isFeatured,category}=product;
    return (
        <div className="card p-3 border-2 border-gray-100 m-3">
        <figure>
            <img className='w-[750px]' src={image} />
        </figure>
        <div className="card-body text-center space-y-2 mt-3">

            <h2 className="text-3xl font-bold">{title}</h2>
            <p className='text-3xl font-bold'>{category}</p>
            <p className='text-3xl'>$ {price}</p> 

            <button onClick={()=>handleAddToCart(product)} className='text-center px-3 py-3 font-bold bg-gray-400 border-2 border-gray-100 rounded-lg'>Add To Cart</button>

        </div>

            <div className='text-center mt-2'>
                <button className={`${isFeatured?'text-center font-bold bg-green-400':'text-center font-bold bg-red-400'}`}>{isFeatured?"Availabe":"Not Available"}</button>
            </div>

            
        </div>
    );
};



Product.propTypes={
    product:PropTypes.object.isRequired,
    handleAddToCart:PropTypes.func.isRequired
}


export default Product;