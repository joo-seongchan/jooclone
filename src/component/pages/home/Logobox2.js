import styled, { keyframes } from "styled-components";
import img3 from "./img/img3.png";

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
transform: translate(0,0) ;
}
16.66667%{
transform: translate(-190px,0) ;
}
`;

const Img1 = styled.img`
  width: 190px;
  height: 190px;
  position: absolute;
  top: 0;
  right: -190px;

  animation: ${photo1} 6s ease-in-out infinite;
`;

const photo2 = keyframes`
0%,33.33333%,100%{
transform: translate(0,0) ;
}
16.66667%{
transform: translate(0,220px) ;
}
`;
const Img2 = styled.img`
  width: 220px;
  height: 220px;
  position: absolute;
  top: -220px;
  right: 0px;
  animation: ${photo2} 6s ease-in-out infinite;
  animation-delay: 2s;
`;

const photo3 = keyframes`
0%,33.33333%,100%{
transform: translate(0,0) rotateY(180deg);
}
16.66667%{
transform: translate(220px,0) rotateY(180deg);
}
`;

const Img3 = styled.img`
  width: 220px;
  height: 220px;
  position: absolute;
  top: 0;
  right: -220px;
  animation: ${photo3} 6s ease-in-out infinite;
  animation-delay: 4s;
`;

export const Logobox2 = () => {
  return (
    <Wrap>
      <Img1 src={img3} />
      <Img2 src={img3} />
      <Img3 src={img3} />
    </Wrap>
  );
};
