import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { menuDb } from "./homeDb";

const Wrap = styled.div`
  width: 33.3333vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  z-index: 9995;
  overflow: hidden;
`;
const Strapbox = styled.div`
  width: 50%;
  height: 100%;
  border: 0.25px solid rgba(255, 255, 255, 0.2);
  position: relative;
  border-right: none;
  top: 0;
  left: 0;
  z-index: 9998;
`;
const move = keyframes`
0%{
    transform: translateY(100px);
    opacity: 0;
}
100%{
    transform: translateY(0px);
    opacity: 1;
}
`;
const Menu = styled.div`
  position: absolute;
  z-index: 9999;
  overflow: hidden;
  opacity: 0;
  animation: ${move} 0.5s linear forwards;
  a {
    color: white;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    width: 33.33333vw;
    height: 50vh;
    justify-content: center;
    align-items: center;
    span {
      padding-bottom: 5px;
      border-bottom: 1px solid white;
    }
  }
`;
const BlackCover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 9997;
  background-color: black;
  transition: 0.5s;
  top: 0;
  left: 0;
  ${Wrap}:hover & {
    transform: translateX(100%);
  }
`;

export const Menubox = ({ num }) => {
  return (
    <Wrap
      style={{
        background: `url(${menuDb[`${num}`].img}) no-repeat center/cover`,
      }}
    >
      <Menu style={{ animationDelay: `${menuDb[`${num}`].delay}` }}>
        <Link to={`/${menuDb[`${num}`].link}`}>
          <span>{menuDb[`${num}`].title}</span>
        </Link>
      </Menu>
      <Strapbox />
      <Strapbox />
      <BlackCover />
    </Wrap>
  );
};
