import styled from "styled-components";
import logoplanone from "../../assets/img/planone.png";
import logoplantwo from "../../assets/img/plantwo.png";
import logoplanthree from "../../assets/img/planthree.png";

export default function Options() {
    return (
        <MobileContainer>
            {/* <DrivenLogoImage src={DrivenLogo} alt="Logo" />
            <LoginForm>
                <StandartInput type="email" placeholder="E-mail"/>
                <StandartInput type="password" placeholder="Senha"/>
                <StandarButton>Entrar</StandarButton>
            </LoginForm>
            <LoginSignUpFooterText>Não possuí uma conta? Cadastre-se</LoginSignUpFooterText> */}
            <PlanTitle>Escolha seu Plano</PlanTitle>
            <SlotPlan>
                <PlanImg src={logoplanone} alt="plan type" />
                <PlanPrice>R$ 39,99</PlanPrice>
            </SlotPlan>
            <SlotPlan>
                <PlanImg src={logoplantwo} alt="plan type" />
                <PlanPrice>R$ 69,99</PlanPrice>
            </SlotPlan>
            <SlotPlan>
                <PlanImg src={logoplanthree} alt="plan type" />
                <PlanPrice>R$ 99,99</PlanPrice>
            </SlotPlan>
        </MobileContainer>
    );
}

const PlanPrice = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    margin-left: 22px;
`;

const PlanTitle = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    margin-top: 30px;
    margin-bottom: 14px;
`;

const SlotPlan = styled.div`
    display: flex;
    align-items: center;
    width: 290px;
    height: 180px;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    /* background-color: yellow; */
    margin-top: 10px;
`;

const PlanImg = styled.img`
    /* width: 92px; */
    /* height: 100%; */
    /* margin-top: 42px; */
    margin-left: 16px;
`;


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