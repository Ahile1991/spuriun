import React,{ useState, useEffect } from 'react'
import { Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'






const HomeScreen = () => {
   

    const [products, setproduct] = useState([]);
    useEffect(() => {

        const {data}

        console.log ("Helo Fash")
    })
    return (
        <>
        <h1>Latest Products</h1>
        <Row>
        { products.map((product) => (

            <Col sm= {12} md= {6} lg= {4} xl= {3} >
            <Product product = {product}/> 
            </Col>




        ))}
         </Row>

        

        
        </>
    )
}

export default HomeScreen
