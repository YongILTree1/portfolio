import styled from "styled-components";
import { ReactComponent as JSIcon } from "/home/kyi4698/myapp/portfolio/src/media/s9DqH6d_Rnx_B6g9AjMWlE6r3TJlR-HVAH3bXZ6Lk9lp8YV1mYhdMUINQJTioaITVH7VaGx6fzhvlZLoW7tCKQuKaWA4ENmPX9Z4Nt1jFwE79o_USmmFId5vr2X8uDBiqrDXTbKv0Y7zKuWEoslMag.svg";
import { ReactComponent as ReactIcon } from "/home/kyi4698/myapp/portfolio/src/media/React-icon.svg";
import { ReactComponent as ReduxIcon } from "/home/kyi4698/myapp/portfolio/src/media/redux-logo-svgrepo-com.svg";
import { ReactComponent as StyledCompIcon } from "/home/kyi4698/myapp/portfolio/src/media/styled-components-1.svg";
import { ReactComponent as GithubIcon } from "/home/kyi4698/myapp/portfolio/src/media/github-svgrepo-com.svg";
import { ReactComponent as FigmaIcon } from "/home/kyi4698/myapp/portfolio/src/media/figma-svgrepo-com.svg";

const MyStack = () => {
  return (
    <StackIntro>
      <IntroTitle>
        🗃️ <u>My Stack</u>
      </IntroTitle>
      <MyStackContainer>
        <StackDivisionContainer>
          <StackDivisionTitle>Language</StackDivisionTitle>
          <StackDivisionBox>
            <StackItem>
              <JSIcon />
              JavaScript
            </StackItem>
          </StackDivisionBox>
        </StackDivisionContainer>
        <StackDivisionContainer>
          <StackDivisionTitle>Framework & Library</StackDivisionTitle>
          <StackDivisionBox>
            <StackItem>
              <ReactIcon />
              React
            </StackItem>
          </StackDivisionBox>
        </StackDivisionContainer>
        <StackDivisionContainer>
          <StackDivisionTitle>State Management</StackDivisionTitle>
          <StackDivisionBox>
            <StackItem>
              <ReduxIcon />
              Redux
            </StackItem>
          </StackDivisionBox>
        </StackDivisionContainer>
        <StackDivisionContainer>
          <StackDivisionTitle>Styling</StackDivisionTitle>
          <StackDivisionBox>
            <StyledCompIcon className="styled-comp-logo" />
          </StackDivisionBox>
        </StackDivisionContainer>
        <StackDivisionContainer>
          <StackDivisionTitle>etc</StackDivisionTitle>
          <StackDivisionWrapper>
            <StackDivisionBox>
              <GithubIcon />
              <StackItem>GitHub</StackItem>
            </StackDivisionBox>
            <StackDivisionBox>
              <FigmaIcon />
              <StackItem>Figma</StackItem>
            </StackDivisionBox>
          </StackDivisionWrapper>
        </StackDivisionContainer>
      </MyStackContainer>
      <hr />
    </StackIntro>
  );
};

const StackIntro = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 0.5rem;
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

const MyStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const StackDivisionContainer = styled.div`
  width: 15vw;
  border: 1px solid #0091ff;
  border-radius: 10px;
  padding: 10px;
  margin-left: 2rem;
  margin-bottom: 2rem;
`;

const StackDivisionTitle = styled.h3`
  margin-bottom: 1rem;
`;

const StackDivisionWrapper = styled.div`
  display: flex;
`

const StackDivisionBox = styled.ul`
  list-style: none;
  margin-left: 1rem;

  svg {
    width: 4.5rem;
    height: 4.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const StackItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 4.5rem;
  text-align: center;
`;

export default MyStack;
