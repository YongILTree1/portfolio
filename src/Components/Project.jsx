import styled from "styled-components";

const Project = () => {
  return (
    <ProjectIntro>
      <IntroTitle>
        🎯 <u>Project</u>
      </IntroTitle>
      <hr />
    </ProjectIntro>
  );
};
export default Project;

const ProjectIntro = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 2.5rem;
  left: 27vw;
  height: 65vh;
  width: 73vw;

  hr {
    position: relative;
    left: 1rem;
    width: 70vw;
    border: 2px solid #1576c0;
  }
`;

const IntroTitle = styled.h2`
  margin-bottom: 2rem;
  line-height: 1.5;
`;
