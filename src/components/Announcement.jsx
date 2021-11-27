import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: #f08080;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ fontSize: "10px" })}
`;

const Announcement = () => {
  return (
    <>
      <Container>Super Shop. free delivary for every new user</Container>
    </>
  );
};

export default Announcement;
