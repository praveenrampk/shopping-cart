import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Div = styled.div`
  width: 50rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10rem;
  h1 {
    text-align: center;
    font-size: 2.5rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    margin: 1rem;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    div {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const A = styled.a`
  border-radius: 50%;
  color: #484a48;
  font-size: 10rem;
`;

function About() {
  return (
    <Div>
      <h1>About Us</h1>
      <div>
        <A href="https://github.com/praveen-p-k" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </A>
        <A href="mailto:praveenrampk@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faPaperPlane} />
        </A>
        <A href="https://www.linkedin.com/in/praveenrampk" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </A>
      </div>
    </Div>
  );
}

export default About;
