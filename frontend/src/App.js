import React from 'react';
import './App.css';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (
    <div className ="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <a href="index.html">Columbia Gorge Holly Farm</a>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>

        <aside className="sidebar">
            <h3>Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li><a href="index.html">Holly</a></li>
                <li><a href="index.html">Honey</a></li>
            </ul>
        </aside>

        <main className="main">
            <div className="content">
                <ul className="products">
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/ramen.png" alt="product"/>
                            <div className="product-name">
                                <a href="product.html">
                                    Slim Shirt
                                </a>
                            </div>
                            <div className="product-brand">Nike</div>
                            <div className="product-price">$55</div>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
        <footer className="footer">
            All right reserved.
        </footer>
    </div>
  );
}

export default App;
