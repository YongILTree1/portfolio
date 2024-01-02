import { Link } from "react-router-dom";
import styled from "styled-components";
import Contact from "./Contact";

const Index = () => {
  return (
    <IndexContainer>
      <IndexLists>
        <IndexItem>
          <Link to="/">🏡 HOME</Link>
        </IndexItem>
        <IndexItem>
          <Link to="/me">🪪 Introduction</Link>
        </IndexItem>
        <IndexItem>
          <Link to="/me/stack">🗃️ Stack</Link>
        </IndexItem>
        <IndexItem>
          <Link to="/me/project">🎯 Project</Link>
        </IndexItem>
        <IndexItem>
          <Link to="/me/exp">🎈 Experience</Link>
        </IndexItem>
      </IndexLists>
      <Contact />
    </IndexContainer>
  );
};

const IndexContainer = styled.nav`
  width: 30vw;
  height: 85vh;
  position: fixed;
  top: 2rem;
  left: 1rem;
  z-index: 2;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const IndexLists = styled.ul`
  margin-top: 2rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;

const IndexItem = styled.li`
  margin-bottom: 2.5rem;
  a {
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    color: black;
  }
`;

export default Index;
