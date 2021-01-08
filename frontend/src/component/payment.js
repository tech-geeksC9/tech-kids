import React , { useState }from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Card } from "antd";
//require('dotenv').config();
/************************************************/
toast.configure();
function Payment(props) {
    const history = useHistory();
    const data = useLocation()
    const { Meta } = Card;

    console.log(props)
    console.log(data);
    var userId = localStorage.getItem('id');
    const [product] = useState({
        name: data.state.name,
        price : data.state.price,
        productBy:data.state.productBy,
        id:data.state.id,
        img:data.state.img,
    })
console.log(product);
   const makePayment = async token =>{
    console.log(token);
    console.log("haio ",product);
    try{
           const response= await axios.post("http://localhost:8000/payments/charge", {token, product});
            // const { status } = response.data
            if (response.data === "success") {
                toast("Success! Check email for details", { type: "success" });
                history.push('/account/'+userId);
              } else {
                toast("Something went wrong", { type: "error" });
              } 
        } catch (error) {
        console.log(error)
        } 
    }
    return (

        <div>

          
              <Card
              hoverable
              style={{ width: '350px', hight: '300px', margin: "auto" , marginTop:'10%'}}
              cover={<img alt="example" src={product.img} style={{height: '400', maxHeight: '400px',width: '350',maxWidth: '350px', }}/>}
            >
              <Meta title={product.name} />
              <label>Teacher name :</label>
              <span>{product.productBy}</span>
              <label>The Price : </label>
              <span> {product.price}</span>
              <br />

           
            
            <StripeCheckout
            stripeKey={process.env.REACT_APP_KEY }
            token ={makePayment}
            name = 'Tick Kid'
            amount = {product.price * 100}>
            </StripeCheckout>
  </Card>
        </div>
    )
}
export default Payment