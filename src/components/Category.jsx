import React from "react";
import styled from "styled-components";
 import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "60vh" })}


`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 10px;
`;
const Button = styled.button`
  padding: 10px;
  font-weight: 500;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  &:hover {
    color: white;
    background-color: #f08080;
    border: none;
    transition: all 0.3s;
    border-radius: 2px;
  }
`;

const Category = ({ item }) => {
  return (
  
    <Container>
      
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button className="Button1">Shop Now</Button>
      </Info>
    </Container>
  );
};

export default Category;
