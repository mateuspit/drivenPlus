import styled from "styled-components";
import logoplanone from "../../assets/img/planone.png";
import logoplantwo from "../../assets/img/plantwo.png";
import logoplanthree from "../../assets/img/planthree.png";

export default function DetailedPlan() {
    return (
        <MobileContainer>
            <DrivenLogoImage src="https://svgshare.com/i/dSP.svg" alt="Logo" /> 
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

const DrivenLogoImage = styled.img`
    width: 299px;
    margin-top: 135px;
    margin-bottom: 84px;
`;

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

const MobileContainer = styled.div`
    /* padding-top: 135px; */
    width: 375px;
    height: 100%;
    margin: auto;
    padding-bottom: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: brown; */
`;