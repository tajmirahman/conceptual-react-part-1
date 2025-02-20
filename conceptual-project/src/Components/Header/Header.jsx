import { TbBrandCoinbase } from "react-icons/tb";
import PropTypes from 'prop-types';

const Header = ({carts,price}) => {
    return (
        <div className="flex justify-between py-[10px] px-20 bg-neutral-200">

            <div className=" ">
                <img className="w-[70px] h-[70px] rounded-full object-cover" src="https://i.ibb.co.com/chBTz803/240-F-747845483-AW5-Ydosolbkbi-WYEDd8-Tuoh-C0oz-B8-QUh.jpg" alt="" />
            </div>
            <div className="space-x-3 text-2xl flex justify-center items-center">
                <a href="http://">About</a>
                <a href="http://">Products</a>
                <a href="http://">Contact</a>
            </div>
            <div className="flex text-2xl justify-between items-center gap-6">
                <p>Cart-{carts.length}</p>
                <div className="flex space-x-2">
                    <p> ${price}  </p>
                    <span className="pt-1 text-red-700"><TbBrandCoinbase /></span>
                </div>
            </div>

        </div>
    );
};

Header.propTypes={
    carts:PropTypes.object.isRequired,
    price:PropTypes.object.isRequired
}

export default Header;