import styled from "styled-components";

const RightConWrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: end;
`;
const ConWrap = styled.div`
  width: 70%;
  height: 85%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Language = styled.div`
  font-size: 18px;
  span {
    font-weight: 900;
  }
`;
const RBconWrap = styled.div``;
const Bar = styled.div`
  width: 20px;
  height: 4px;
  border: 2px solid black;
`;
const Text = styled.div`
  font-size: 1.5em;
  font-weight: 600;
  margin-top: 30px;
`;
const ButtonWrap = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  margin-top: 30px;
`;
const Button = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.5em;
  border: 2px solid black;
  border-radius: 20px;
`;

export const RightCon = () => {
  return (
    <RightConWrap>
      <ConWrap>
        <Language>
          Nl | <span>EN</span>
        </Language>
        <RBconWrap>
          <Bar></Bar>
          <Text>Latest updates & quick links</Text>
          <ButtonWrap>
            <Button>WE WELCOME NH MEDIA</Button>
            <Button>RENT OUR STUDIO OR EVENTSPACE</Button>
          </ButtonWrap>
        </RBconWrap>
      </ConWrap>
    </RightConWrap>
  );
};
