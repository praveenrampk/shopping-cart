import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import About from './About';
import Detail from './Detail';
import NavBar from './NavBar';
import React, { useEffect, useState } from 'react';
import Cart from './cart';

function Main() {
  let [cartItem, setCartItem] = useState([]);
  const [isDisable, setISDisable] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItem]);

  const CloseCart = () => {
    if (isDisable) {
      setISDisable(false);
    } else {
      setISDisable(true);
    }
  };

  const checkExist = (item) => {
    return cartItem.some((obj) => obj.id === item.id);
  };

  const getCartItem = (item) => {
    let copyItem = [...cartItem];
    if (!checkExist(item)) {
      copyItem.push(item);
      setCartItem(copyItem);
    } else {
      alert('Already Exist');
    }
    getTotal();
  };

  const removeItem = (e) => {
    const temp = [...cartItem];
    temp.splice(Number(e.target.id), 1);
    setCartItem(temp);
  };

  const getTotal = () => {
    let temp = 0;
    cartItem.forEach((obj) => {
      temp += obj.quantity * obj.price;
    });
    setTotal(temp);
  };

  const removeAll = () => {
    setCartItem([]);
    CloseCart();
  };

  return (
    <Router>
      <NavBar length={cartItem.length} close={CloseCart} />
      <Cart
        data={cartItem}
        disable={isDisable}
        close={CloseCart}
        total={total}
        remove={removeItem}
        removeAll={removeAll}
      />
      <Routes>
        <Route path="*" exact element={<Home />}></Route>
        <Route path="/product" exact element={<Product />}></Route>
        <Route
          path="/product/:id"
          exact
          element={<Detail getCartItem={getCartItem} />}
        ></Route>
        <Route path="/about" exact element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default Main;
