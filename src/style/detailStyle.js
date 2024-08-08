import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  box-shadow: 0px 0.2rem 0.5rem rgb(0, 0, 0);
  width: 50rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  padding: 1rem;
  img {
    width: 15rem;
    object-fit: contain;
    height: auto;
  }
  section {
    padding: 5rem;
  }
  h3 {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 70%;
    align-items: flex-start;
    section {
      padding: 0;
      margin: 0;
    }
  }
`;

export const Quantity = styled.div`
  width: 7rem;
  margin: 1.5rem;
  display: flex;
  justify-content: space-between;
  img {
    width: 10rem;
  }
  span {
    font-size: 1.2rem;
    font-weight: 800;
  }
  h3 {
    font-size: 1.5rem;
  }
`;

export const Sub = styled.button`
  border-radius: 50%;
  border: none;
  outline: none;
  padding: 0.5rem;
  cursor: pointer;
  background-color: #f53357;
  color: white;
`;
export const Add = styled(Sub)`
  background-color: #94db56;
  color: black;
`;
export const Cart = styled.div`
  display: flex;
  margin-bottom: 1rem;
  button {
    padding: 0.8rem 1.5rem;
    margin-right: 1rem;
    font-weight: 800;
    background-color: #136597;
    color: white;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 0.5rem;
  }
`;

export const AddCart = styled.button`
  padding: 0.8rem 1.5rem;
  margin-right: 1rem;
  font-weight: 800;
  background-color: #136597;
  color: white;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 0.5rem;
`;

export const Buy = styled(AddCart)`
  background-color: #6763e0 !important;
`;

export const P = styled.p`
  color: green;
  font-size: 1.3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;
