import styled from "styled-components";
import MyButton from "../Components/MyButton";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <MyVisionBox>
        <MyVison>
          "적극적으로 소통하는
          <br />
          FRONT-END 개발자 권용일입니다."
        </MyVison>
      </MyVisionBox>
      <MyButton label="About Me" type="primary" onClick={() => navigate("/me")} />
    </HomeContainer>
  );
};

const HomeContainer = styled.section`
  background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 0, rgba(215, 236, 255, 0.83) 58%, #cfe8ff 85%);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  word-break: keep-all;
`;

const MyVisionBox = styled.div`
  max-width: 80rem;
  width: 100%;
  height: 60vh;
  padding: 3rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyVison = styled.span`
  text-align: center;
  line-height: 1.5 !important;
  font-size: 4rem;
  font-weight: 700;
`;

export default Home;
