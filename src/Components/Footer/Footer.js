import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterIcons,
} from '../Styles/StyledFooter';
import {
  MailOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

export default function Footer() {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <h3>Lets Work!</h3>
        <a href="tel:+3624629138" className="phone_number">
          (361)-462-9138
        </a>
        <StyledFooterIcons>
          <p>
            <a href="mailto:malikyoung@me.com">
              <MailOutlined />
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/malik-young-097694209/" target="blank"><LinkedinOutlined /></a>
          </p>
          <p>
            <a href="https://www.twitter.com/atkinyo" target="blank"><TwitterOutlined /></a>
          </p>
        </StyledFooterIcons>
      </StyledFooterContainer>
    </StyledFooter>
  );
}
