import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./layout";
import Login from "./login";
import Register from "./register"
import Products from "./products/products";
import Product from "./product";
import Cart from "./cart/cart";
import PaymentSteps from "./payment/paymentSteps";
import SelectAddress from "./payment/selectAddress";
import Shipping from "./payment/shipping";
import Payment from "./payment/payment";
import CreditCard from "./paymentMehods/creditcard";
import Home from "./home/home";
import Contact from "./contact";
import Account from "./account";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="products" element={<Products />}/>
            <Route path="product" element={<Product />}/>
            <Route path="cart" element={<Cart />}/>
            <Route path="payment" element={<PaymentSteps />}>
              <Route index element={<SelectAddress />}/>
              <Route path="shipping" element={<Shipping />}/>
              <Route path="payment" element={<Payment />}>
                <Route index element={<CreditCard />}/>
                <Route path="paypal" element={<CreditCard />}/>
                <Route path="mobilemoney" element={<CreditCard />}/>
              </Route>
            </Route>
            <Route path="login" element={<Login />}/>
            <Route path="register" element={<Register />}/>
            <Route path="contact" element={< Contact />} />
            <Route path="account" element={< Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


