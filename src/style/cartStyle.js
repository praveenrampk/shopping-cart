import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: ${(props) => (props.visible ? "30rem" : "0")};
  height: 100vh;
  background-color: white;
  z-index: 10;
  box-shadow: -3px 0px 5px 1px #414345;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  pointer-events: ${(props) => (props.visible ? "all" : "none")};
  transition: opacity 1s ease-in-out, width 1s ease-in-out;
  overflow: auto;
  h1 {
    margin-top: 10rem;
    text-align: center;
    color: #484a48;
  }
  main {
    margin-top: 6rem;
  }
  span {
    color: green;
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
    width: ${(props) => (props.visible ? "100%" : "0")};
    opacity: ${(props) => (props.visible ? "1" : "0")};
    pointer-events: ${(props) => (props.visible ? "all" : "none")};
    text-align: center;
    padding: 0.8rem;
  }
`;
export const Close = styled.button`
  border: none;
  font-size: 3rem;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  background-color: transparent;
  margin: 1rem;
`;

export const Item = styled.div`
  margin: 1rem;
  box-shadow: 0px 0.2rem 0.5rem rgb(0, 0, 0);
  display: flex;
  width: 90%;
  height: auto;
  img {
    width: 10rem;
    object-fit: contain;
  }
  section {
    margin-top: 3rem;
    padding: 0.8rem;
  }
  button {
    margin-top: 1rem;
    padding: 0.2rem 0.6rem;
    border-radius: 0.2rem;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    border: none;
    color: white;
    background-color: #f53357;
  }
`;

export const Proceed = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  color: white;
  padding: 0.5rem 1rem;
  font-weight: 900;
  background-color: #6763e0;
  margin-top: 2rem;
  font-size: 1.3rem;
  width: 20rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.5rem;
`;
