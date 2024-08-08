import { Div, Section, Button } from "../style/homeStyle";
import sideImg from "../style/truck-loading.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Home() {
  return (
    <Div>
      <img src={sideImg} alt="shopping graphic" />
      <Section>
        <h1>
          Welcome
          <FontAwesomeIcon icon={faStore} />
        </h1>
        <p>
          A walk-in-a-park online shopping
          <br /> experience!
        </p>
        <div>
          <Link data-testid="shopNow" to="/product">
            <Button>Shop Now!</Button>
          </Link>
        </div>
      </Section>
    </Div>
  );
}

export default Home;
