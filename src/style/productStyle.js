import styled, { keyframes } from "styled-components";

export const Div = styled.div`
  box-shadow: 0px 0.2rem 0.5rem rgb(0, 0, 0);
  width: 15rem;
  padding: 0.8rem;
  overflow: visible;
  img {
    width: 100%;
    height: 20rem;
  }
  section {
    padding: 0.5rem;
    margin-top: 1rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  h3 {
    font-size: 1.5rem;
  }
  span {
    color: #c2c0ba;
    font-size: 1rem;
  }
  @media only screen and (max-width: 768px) {
    width: 8rem;
    section {
      padding: 0;
    }
    h3 {
      font-size: 1rem;
      overflow-wrap: break-word;
    }
    .loader {
      width: 5rem;
      height: 5rem;
    }
  }
`;
export const Price = styled.p`
  color: green;
  font-size: 1.3rem;
  font-weight: 700;
  text-decoration: none;
`;

export const Rating = styled(Price)`
  color: black;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 1rem solid #f3f3f3;
  border-top: 1rem solid #3498db;
  animation: ${rotate} 2s linear infinite;
`;

// export const detailLink = styled(Link)`
//   text-decoration: none;
//   color: inherit;
// `;
