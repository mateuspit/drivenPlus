import styled from "styled-components";
import DrivenLogo from "../../assets/img/DrivenLogo.png";

export default function Home() {
    return (
        <MobileContainer>
            <DrivenLogoImage src={DrivenLogo} alt="Logo" />
            <LoginForm>
                <StandartInput type="email" placeholder="E-mail"/>
                <StandartInput type="password" placeholder="Senha"/>
                <StandarButton>Entrar</StandarButton>
            </LoginForm>
            <LoginSignUpFooterText>Não possuí uma conta? Cadastre-se</LoginSignUpFooterText>
        </MobileContainer>
    );
}



const LoginSignUpFooterText = styled.p`
    text-decoration-line: underline;
    color: #FFFFFF;
    font-size: 14px;
    margin-top: 24px;
`;

const StandarButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 122px;
    gap: 10px;
    color: #FFFFFF;
    width: 298px;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
    border: none;
    margin-top: 24px;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const DrivenLogoImage = styled.img`
    width: 299px;
    margin-top: 135px;
    margin-bottom: 84px;
`;

const MobileContainer = styled.div`
    /* padding-top: 135px; */
    width: 375px;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: brown; */
`;

const StandartInput = styled.input`
    background: #FFFFFF;
    border-radius: 8px;
    width: 299px;
    height: 52px;
    margin-top: 16px;
    padding-left: 14px;
    padding-left: 18px;
`;