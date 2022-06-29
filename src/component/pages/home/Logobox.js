import styled from "styled-components";
import img1 from "./img/img1.png";

const Wrap = styled.div`
  width: 16.66667vw;
  height: 50vh;
  background-color: black;
  position: relative;
`;
const Img1 = styled.img`
  width: 50%;
  height: 40%;
  position: absolute;
  bottom: 0;
  right: 0;
`;
const Img2 = styled.div``;

export const Logobox = () => {
  return (
    <Wrap>
      <Img1 src={img1} />
      <Img2 />
    </Wrap>
  );
};
