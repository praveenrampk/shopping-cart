import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Div, Rating, Price } from '../style/productStyle';

const iconStyle = { color: '#ffe047' };

function Card(props) {
  const { category, id, price, rating, title } = props.info;
  return (
    <Div id={id}>
      <img src={props.info.image} alt={title} />
      <section>
        <h3>{title}</h3>
        <div>
          <Rating>
            {rating.rate}
            <FontAwesomeIcon style={iconStyle} icon={faStar} />
            <span>{category}</span>
          </Rating>
          <Price>$ {price}</Price>
        </div>
      </section>
    </Div>
  );
}

export default Card;
