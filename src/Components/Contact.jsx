import styled from "styled-components";
import { ReactComponent as GmailIcon } from "/home/kyi4698/myapp/portfolio/src/media/gmail-icon-logo-svgrepo-com.svg";
import { ReactComponent as GithubIcon } from "/home/kyi4698/myapp/portfolio/src/media/github-svgrepo-com.svg";
import { ReactComponent as TistoryIcon } from "/home/kyi4698/myapp/portfolio/src/media/9935084A5B9541D014.svg";
import { ReactComponent as PhoneIcon } from "/home/kyi4698/myapp/portfolio/src/media/cell-phone-svgrepo-com.svg";

const Contact = () => {
  return (
    <ContactContainer>
      <h3>
        <b>
          🤝<u>CONTACT</u>
        </b>
      </h3>
      <ContactInfoContainer>
        <InfomationLink href="tel:+821085554698">
          <PhoneIcon />
          <span>010-8555-4698</span>
        </InfomationLink>
        <InfomationLink href="mailto:kyi4698@gamil.com">
          <GmailIcon />
          <span>kyi4698@gamil.com</span>
        </InfomationLink>
        <InfomationLink href="https://github.com/YongILTree1">
          <GithubIcon />
          <span>https://github.com/YongILTree1</span>
        </InfomationLink>
        <InfomationLink href="https://socialdev.tistory.com/">
          <TistoryIcon />
          <span>https://socialdev.tistory.com/</span>
        </InfomationLink>
      </ContactInfoContainer>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  position: absolute;
  bottom: 0;
  h3 {
    margin-bottom: 1.3rem;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfomationLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  margin-bottom: 1rem;
`;
export default Contact;
