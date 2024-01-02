import styled from "styled-components";

// Components
import Index from "../Components/Index";
import Introduce from "../Components/Introduce";
import MyStack from "../Components/MyStack";
import Project from "../Components/Project";
import Experience from "../Components/Experience";

const AboutMe = () => {
  return (
    <StyledMyInfoSection>
      <Index />
      <Introduce />
      <MyStack />
      <Project />
      <Experience />
    </StyledMyInfoSection>
  );
};

const StyledMyInfoSection = styled.section`
  background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 0, rgba(215, 236, 255, 0.83) 58%, #cfe8ff 90%);
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1.3rem;
  word-break: keep-all;
`;

export default AboutMe;
