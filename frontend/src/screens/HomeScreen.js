import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Content from '../components/Content';

function HomeScreen(props) {
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());

    return () => {
      //
    };
  }, [])

  return loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :

  <div className="homepage">
    <div className="title-homepage">
        <h1>Columbia Gorge </h1>
        <h2>Holly Farm </h2>
    </div>
{/* HOMEPAGE HERO */}
    <div className="hero-homepage">

        <div>
            <Content>
                    <p>Hello, my name is Rachel. I'm a full stack engineer leveraging a background in Product Managment to build a more intuitive user experience on the web. </p>

                    <p>I'm driven by working on products that delight users, solves complex customer problems with simple solutions, while driving significant business outcomes.</p>

                    <p>While my experience is with MongoDB, JavaScript, React.js and Node.js, I am always striving to learn new things. </p>
                    
                
            </Content>

        </div>
    </div>

{/* AVAILABLE PRODUCTS DISPLAY */}
      <ul className="products">
        {
          products.map(product =>
            <li key={product._id}>
              <div className="product">
                <Link to={'/product/' + product._id}>
                  <img className="product-image" src={product.image} alt="product" />

                </Link>
                <div className="product-name">
                  <Link to={'/product/' + product._id}>{product.name}</Link>
                </div>
                <div className="product-price">${product.price}</div>
              </div>
            </li>)
        }



      </ul>
    </div>
}
export default HomeScreen;