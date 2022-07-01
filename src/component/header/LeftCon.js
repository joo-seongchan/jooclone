import { Link } from "react-router-dom";
import styled from "styled-components";

const LeftConWrap = styled.ul`
  width: 50%;
  height: 100%;
`;
const Menu = styled.li`
  width: 100%;
  height: 16.66667%;
  display: flex;
  align-items: center;
  a {
    font-size: 3em;
    color: black;
    font-weight: 600;
  }
`;

export const LeftCon = () => {
  return (
    <LeftConWrap>
      <Menu>
        <Link to="/">Home</Link>
      </Menu>
      <Menu>
        <Link to="/">Visit</Link>
      </Menu>
      <Menu>
        <Link to="/">Community</Link>
      </Menu>
      <Menu>
        <Link to="/">Studio</Link>
      </Menu>
      <Menu>
        <Link to="about">About Us</Link>
      </Menu>
      <Menu>
        <Link to="/">Intranet</Link>
      </Menu>
    </LeftConWrap>
  );
};
