import PropTypes from 'prop-types';

const Product = ({product}) => {
    const {image,title,price,isFeatured,category}=product;
    return (
        <div className="card p-3 border-2 border-gray-100 m-3">
        <figure>
            <img className='w-[600px]' src={image} />
        </figure>
        <div className="card-body text-center space-y-2 mt-3">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className='text-3xl font-bold'>{category}</p>
            <p className='text-3xl'>$ {price}</p>  
        </div>
            <p className='text-center font-bold'>{isFeatured?"Availabe":"Not Available"}</p>
        </div>
    );
};



Product.propTypes={
    product:PropTypes.object.isRequired,
}


export default Product;