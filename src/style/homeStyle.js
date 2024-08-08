import styled from "styled-components";

export const Div = styled.div`
  padding: 0rem;
  margin: 0rem;
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 768px) {
    justify-content: flex-start;
    img {
      display: none;
    }
    section {
      width: 100%;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  h1 {
    margin-top: 10rem;
    font-size: 3rem;
    color: #484a48;
  }
  p {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  padding: 1rem 2.5rem;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  background-color: #000;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  box-shadow: 0px 0.2rem 0.5rem rgb(0, 0, 0);
  border-radius: 0.8rem;
`;
