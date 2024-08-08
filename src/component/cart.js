import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Div, Item, Close, Proceed } from '../style/cartStyle';

function CartItem(props) {
  const { id, quantity, img, title, price } = props.obj;
  return (
    <Item id={id}>
      <img src={img} alt="product" />
      <section>
        <h3>{title}</h3>
        <p>$ {price}</p>
        <p>Quantity: {quantity}</p>
        <button id={props.i} onClick={props.remove}>
          Delete
        </button>
      </section>
    </Item>
  );
}
function Cart(props) {
  const checkCart = () => {
    if (props.data.length === 0) {
      return <h1>Your Cart is Empty </h1>;
    }
  };

  return (
    <Div visible={props.disable}>
      <Close onClick={props.close}>
        <FontAwesomeIcon icon={faXmark} />
      </Close>
      {checkCart()}
      <main>
        {props.data.map((obj, i) => (
          <CartItem key={i} i={i} obj={obj} remove={props.remove} />
        ))}
      </main>
      <h1>
        TOTAL AMOUNT:<span> ${props.total}</span>
      </h1>

      <Proceed to="/product" onClick={props.removeAll}>
        Check Out Proceed
      </Proceed>
    </Div>
  );
}

export default Cart;
