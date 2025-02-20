import { useEffect, useState } from "react"
import AllProucts from "./Components/AllProducts/AllProucts"
import CartContainer from "./Components/CartContainer/CartContainer"
import Header from "./Components/Header/Header"



function App() {

  // Use State For Tow Button one Active then another is deActive
  const [isActive, setIsActive] = useState({
    cart: true,
    status: 'active',
  });

  const handleCartButton = (status) => {
    if (status === 'about') {
      setIsActive({
        cart: true,
        status: 'about'
      });
    }
    else {
      setIsActive({
        cart: false,
        status: 'contact'
      });
    }
  }


  // Use State for All Products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('fake.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  //Use State For Carts
  const [carts, setCarts] = useState([]);

   // Price set in Main Account

   const [price, setPrice]=useState(500);

   const handleIncrementPrice=(pr)=>{
       setPrice(price + pr);
   }

   const handleDecrementPrice=(id)=>{
       const product=carts.find(cart=> cart.id === id);
       setPrice(price- product.price)
   }

  // Delete from Cart Button

  const handleDeleteCart = (id) => {
    handleDecrementPrice(id);
    const newCart = carts.filter(p => p.id !== id);
    setCarts(newCart);
  }

  // Handle Add To Cart Button

  const handleAddToCart = (cart) => {
    handleIncrementPrice(cart.price);
    const isExist = carts.find(p => p.id === cart.id);

    if (isExist) {
      alert('R add Kora jabe na');
    } else {
      const newCart = [...carts, cart];
      setCarts(newCart);
    }

  }

   






  return (
    <>

      <div className=" sticky top-0 left-0">
        <Header carts={carts} price={price}></Header>
      </div>

      {/* Main div start here */}

      <div className="flex justify-between px-20 pt-4">

        <AllProucts products={products} handleAddToCart={handleAddToCart}></AllProucts>

        <CartContainer
          handleDeleteCart={handleDeleteCart}
          handleCartButton={handleCartButton}
          isActive={isActive}
          carts={carts}

        ></CartContainer>

      </div>

      {/* Main div Ends here */}


    </>
  )
}

export default App
