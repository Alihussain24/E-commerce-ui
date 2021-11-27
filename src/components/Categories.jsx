import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import Category from "./Category";
const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  text-decoration: underline;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  ${mobile({ padding: "25px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <>
      <Title>Categoryes</Title>
      <Container>
        {categories.map((item) => (
          <Category item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
