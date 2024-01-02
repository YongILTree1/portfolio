import styled from "styled-components";

const Introduce = () => {
  return (
    <IntroduceArticle>
      <IntroTitle>
        🪪 <u>Introduction</u>
      </IntroTitle>
      <MyInfoContainer>
        <MyInfo>
          <MyPhoto src="/20220526_124119.jpg" alt="it's me" />
          <NameArea>
            <p>권용일(Kwon Yong-il)</p>
            <p>FRONTEND DEVELOPER</p>
          </NameArea>
        </MyInfo>
        <IntroductionLists>
          <IntroItem>지난 10년간 사회복지사로 근무하며 여러 이해당사자를 상담하며 언어적, 비언어적 소통방법을 연구하였습니다.</IntroItem>
          <IntroItem>앞으로의 10년은 개발언어를 통해 여러 이해당사자와 소통하는 방법을 연구하고자 합니다.</IntroItem>
          <IntroItem>이를 위해 지난 1년 간 CodeStates BootCamp를 통해 프론트엔드 개발의 기초 지식을 습득하였습니다.</IntroItem>
          <IntroItem>JavaScript와 React를 이용하여 프로젝트를 진행해보았으며, GitHub, Figma, Styled-component 등의 툴을 익혔습니다.</IntroItem>
          <IntroItem>
            <b>저의 새로운 도전의 파트너가 되어주세요!</b>
          </IntroItem>
        </IntroductionLists>
      </MyInfoContainer>
      <hr />
    </IntroduceArticle>
  );
};

const IntroduceArticle = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 2rem;
  left: 27vw;
  height: 60vh;
  width: 73vw;

  hr{
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

const MyInfoContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const MyInfo = styled.div`
  margin-right: 2rem;
  height: 40vh;
`;

const MyPhoto = styled.img`
  width: 20vw;
  border-radius: 30%;
  margin-bottom: 0.5rem;
`;

const NameArea = styled.div`
  width: 20vw;
  text-align: center;
  line-height: 1.5;
  font-size: 1.3rem;
  font-weight: 600;
`;

const IntroductionLists = styled.ul`
  width: 40vw;
  margin-left: 2rem;
`;

const IntroItem = styled.li`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

export default Introduce;
