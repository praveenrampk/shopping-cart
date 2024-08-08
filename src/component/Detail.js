import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faAdd, faMinus } from '@fortawesome/free-solid-svg-icons';
import {
  Div,
  Quantity,
  Cart,
  P,
  Sub,
  Add,
  AddCart,
  Buy,
} from '../style/detailStyle';
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
export const detailContext = React.createContext();

function Detail(props) {
  const { id } = useParams();
  let [item, setItem] = useState({});
  let [itemRating, setItemRating] = useState({});
  let [count, setCount] = useState(1);

  useEffect(() => {
    fetchItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchItem = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        mode: 'cors',
      });
      const data = await response.json();
      setItem(data);
      setItemRating(data.rating);
    } catch (error) {
      alert(error);
    }
  };

  const increase = () => setCount(count + 1);
  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const buyProduct = () => {
    alert('Thank you for purchase');
  };

  const handleAddToCart = () => {
    const temp = {
      id: item.id,
      quantity: count,
      img: item.image,
      title: item.title,
      price: item.price,
    };
    props.getCartItem(temp);
  };

  return (
    <Div>
      <img src={item.image} alt="product" />
      <section>
        <h3>{item.title}</h3>
        <p>
          <FontAwesomeIcon icon={faStar} style={{ color: '#ffe047' }} />
          {itemRating.rate}
        </p>
        <p>Count: {itemRating.count}</p>
        <Quantity>
          <Sub onClick={decrease}>
            <FontAwesomeIcon icon={faMinus} />
          </Sub>
          <span>{count}</span>
          <Add onClick={increase}>
            <FontAwesomeIcon icon={faAdd} />
          </Add>
        </Quantity>
        <P>$ {item.price}</P>
        <Cart>
          <AddCart onClick={handleAddToCart}>Add to Cart</AddCart>
          <Link to="/product" onClick={buyProduct}>
            <Buy>Buy Now</Buy>
          </Link>
        </Cart>
        <p>{item.description}</p>
      </section>
    </Div>
  );
}

export default Detail;
