import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { LeftCon } from "./LeftCon";
import { RightCon } from "./RightCon";

const Container = styled.div`
  width: 100vw;
  height: 65vh;
  padding: 120px 16.66667vw 115px 16.66667vw;
  display: flex;
`;

const Icon = styled.div`
  font-size: 46px;
  font-weight: 900; ;
`;

export const Header = () => {
  return (
    <>
      <Icon>
        <FontAwesomeIcon icon={faClose} />
      </Icon>
      <Container>
        <LeftCon />
        <RightCon />
      </Container>
    </>
  );
};
