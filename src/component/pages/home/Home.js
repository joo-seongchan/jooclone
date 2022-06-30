import styled from "styled-components";
import { Logobox } from "./Logobox";
import { Logobox1 } from "./Logobox1";
import { Logobox2 } from "./Logobox2";
import { Logobox3 } from "./Logobox3";
import { Menubox } from "./Menubox";

const Container = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: 33.33333vw 16.66667vw 16.66667vw 33.33333vw;
`;

export const Home = () => {
  return (
    <Container>
      <Menubox num="0" />
      <Logobox />
      <Logobox1 />
      <Menubox num="1" />
      <Menubox num="2" />
      <Logobox2 />
      <Logobox3 />
      <Menubox num="3" />
    </Container>
  );
};
