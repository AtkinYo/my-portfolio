import { StyledFooter, StyledFooterContainer, StyledFooterIcons } from '../Styles/StyledFooter'
import { MailOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';

export default function Footer() {
    return(
        <StyledFooter>
            <StyledFooterContainer>
                <h3>Lets Work!</h3>
                <StyledFooterIcons>
                    <p><MailOutlined /></p>
                    <p><LinkedinOutlined /></p>
                    <p><TwitterOutlined /></p>
                </StyledFooterIcons>
            </StyledFooterContainer>
        </StyledFooter>
    )
}