import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  background-color: #0ff;
  z-index: 1;
  width: 100%;
  h1 {
    margin: 1rem;
    padding: 1rem;
    font-family: cursive;
  }
  ul {
    display: flex;
    list-style-type: none;
  }
  li {
    padding: 1.3rem;
    font-size: 1.5rem;
    color: black;
    font-weight: 800;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ul {
      width: 50%;
    }
    li {
      padding: 0;
      margin: 0;
    }
    span {
      display: none;
    }
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  margin-right: 2rem;
`;

export const Li = styled.li`
  position: relative;
`;

//for tell how many item in the cart
export const Span = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #000;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  text-align: center;
  color: white;
`;
