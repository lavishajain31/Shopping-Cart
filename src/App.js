import React, { useState } from 'react';

const Product = ({ name, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    onAddToCart(name, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      onAddToCart(name, quantity - 1);
    }
  };

  return (
    <div>
      <div>
        <span>{name}</span>
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (productName, productQuantity) => {
    //const updatedCart = [...cart.filter(item => item.quantity > 0), { name: productName, quantity: productQuantity }];
    const updatedCart = cart.map(item =>
      item.name === productName ? { ...item, quantity: productQuantity } : item
    );
  
    if (!updatedCart.some(item => item.name === productName)) {
      updatedCart.push({ name: productName, quantity: productQuantity });
    }
  
    setCart(updatedCart);
  };

  return (
    <div className='pro'>
      <div className='p'>
        <div className="l"><Product name="Milk" onAddToCart={addToCart} /></div>
        <div className="m"><Product name="Yogurt" onAddToCart={addToCart} /></div>
        <div className="n"><Product name="Butter" onAddToCart={addToCart} /></div>
        <div className="x"><Product name="Cheese" onAddToCart={addToCart} /></div>
        <div className="q"><Product name="Custard" onAddToCart={addToCart} /></div>
      </div>

      <div className='co'>
        <h2>Your Cart</h2>
        {cart.map((item, index) => (
          <div key={index}>
            {item.name} - {item.quantity}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
