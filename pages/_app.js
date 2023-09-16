import '@/styles/globals.css'
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import Head from 'next/head';
import {useState, useEffect} from 'react';

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState(false);

  const showAlert = () => {
    setAlert(true);
    setTimeout(()=>{
      setAlert(false);
    },2000);
  }

  const addToCart = (product_id, quantity, price, product_name, size, variant) => {
    let mycart = [...cart];
    let alreadyPresent = false;
    mycart.forEach( cartItem => {
      if (cartItem.product_id === product_id){
          alreadyPresent = true;
      }
    })

    if (!alreadyPresent){
      const product = {product_id, quantity, price, product_name, size, variant};
      mycart.push(product);
      setCart(mycart);
    }
    localStorage.setItem("codesWearCart", JSON.stringify(mycart));
  }

  const clearCart = () => {
    setCart([]);
    localStorage.setItem("codesWearCart",[]);
  }

  const addQuantity = (product_id) => {
    const mycart = [...cart];
    for (let i=0;i<mycart.length;i++){
      if (mycart[i].product_id === product_id){
        mycart[i].quantity += 1;
        break;
      }
    }
    setCart(mycart);
    localStorage.setItem("codesWearCart", JSON.stringify(mycart))
  }

  const decreaseQuantity = (product_id) => {
    const mycart = [...cart];
    for (let i=0;i<mycart.length;i++){
      if (mycart[i].product_id === product_id){
        if (mycart[i].quantity!=0){
          mycart[i].quantity -= 1;
        }
        break;
      }
    }
    setCart(mycart);
    localStorage.setItem("codesWearCart", JSON.stringify(mycart))
  }

  useEffect(()=>{
    if (localStorage.getItem("codesWearCart")!==null){
      if (localStorage.getItem("codesWearCart") !== ""){
        setCart(JSON.parse(localStorage.getItem("codesWearCart")));
      }
    }
  },[]);

  return (
    <div id="main_box">
       <Head>
        <title>Codeswear: wear your code</title>
        <link rel="icon" href="/icon.jpeg" />
      </Head>
      <Navbar cart={cart} addToCart={addToCart} clearCart={clearCart} addQuantity={addQuantity} decreaseQuantity={decreaseQuantity} alert={alert} showAlert={showAlert}/>
      <Component cart={cart} addToCart={addToCart} clearCart={clearCart} {...pageProps} addQuantity={addQuantity} decreaseQuantity={decreaseQuantity} alert={alert} showAlert={showAlert} />
      <Footer/>
    </div>
  )
}
