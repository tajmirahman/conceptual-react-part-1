import { useEffect, useState } from "react"
import AllProucts from "./Components/AllProducts/AllProucts"
import CartContainer from "./Components/CartContainer/CartContainer"
import Header from "./Components/Header/Header"



function App() {

  const [isActive, setIsActive]=useState({
      cart:true,
      status:'active',
  });

  const handleCartButton=(status)=>{
    if(status === 'about'){
      setIsActive({
        cart: true,
        status:'about'
      });
    }
    else{
      setIsActive({
        cart: false,
        status:'contact'
      });
    }
  }

  const [products,setProducts]=useState([]);

  useEffect(()=>{
    fetch('fake.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])



  return (
    <>
      
      <div>
        <Header></Header>
      </div>

      {/* Main div start here */}

      <div className="flex justify-between px-20 pt-4">

        <AllProucts products={products}></AllProucts>

        <CartContainer  handleCartButton={handleCartButton} isActive={isActive}></CartContainer>

      </div>

      {/* Main div Ends here */}
      
      
    </>
  )
}

export default App
