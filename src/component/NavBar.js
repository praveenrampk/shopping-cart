import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Header, Span, Li, NavLink } from "../style/navBarStyle";

function NavBar(props) {
  return (
    <Header>
      <h1>
        <FontAwesomeIcon icon={faBagShopping} />
        New style shop
      </h1>
      <nav>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/product">
            <li>Product</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <Li onClick={props.close}>
            <FontAwesomeIcon icon={faCartShopping} />
            <Span>{props.length}</Span>
          </Li>
        </ul>
      </nav>
    </Header>
  );
}

export default NavBar;
