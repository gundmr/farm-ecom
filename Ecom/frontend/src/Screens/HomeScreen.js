import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom'

function HomeScreen(props) {

    // define hooks
    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("/api/products");
            setProduct(data);
        }
        fetchData();
        return () => {
            //
        };
    }, [])

    return <ul className="products">
            {/* map over products - dynamically */}
            { products.map(product => 
                    <li key={product._id}>
                        <div className="product">
                            <Link to={'/product/' + product._id}>
                                <img className="product-image" src={product.image} alt="product"/>
                            </Link>

                            <div className="product-name">
                                <Link to={'/product/' + product._id}>
                                    {product.name}    
                                </Link>
                            </div>

                            <div className="product-brand">{product.brand}</div>

                            <div className="product-price">{product.price}</div>
                            
                        </div>
                    </li>
            )}        
        </ul>
}

export default HomeScreen;