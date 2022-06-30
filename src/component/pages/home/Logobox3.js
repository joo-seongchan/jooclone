import styled, { keyframes } from "styled-components";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";

const Wrap = styled.div`
  width: 16.66667vw;
  height: 50vh;
  background-color: black;
  position: relative;
  overflow: hidden;
  border: 0.25px solid rgba(255, 255, 255, 0.2);
`;

const photo1 = keyframes`
0%,33.33333%,100%{
transform: translate(0,0);
}
16.66667%{
transform: translate(0,-210px);
}
`;

const Img1 = styled.img`
  width: 210px;
  height: 210px;
  position: absolute;
  bottom: -210px;
  right: 0;
  animation: ${photo1} 6s ease-in-out infinite;
`;

const photo2 = keyframes`
0%,33.33333%,100%{
transform: translate(0,0);
}
16.66667%{
transform: translate(-200px,0);
}
`;
const Img2 = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 0;
  right: -200px;
  animation: ${photo2} 6s ease-in-out infinite;
  animation-delay: 2s;
`;

const photo3 = keyframes`
0%,33.33333%,100%{
transform: translate(0,0);
}
16.66667%{
transform: translate(-220px,0);
}
`;

const Img3 = styled.img`
  width: 220px;
  height: 220px;
  position: absolute;
  bottom: 0;
  right: -220px;
  animation: ${photo3} 6s ease-in-out infinite;
  animation-delay: 4s;
`;

export const Logobox3 = () => {
  return (
    <Wrap>
      <Img1 src={img1} />
      <Img2 src={img2} />
      <Img3 src={img1} />
    </Wrap>
  );
};
