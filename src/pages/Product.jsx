import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 75vh;
  object-fit: cover;
  border-radius: 5px;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 500;
`;
const Desc = styled.p`
  margin: 10px 10px 20px 0px;
`;
const Price = styled.span`
  font-weight: 400;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 46%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 10px;
  cursor: pointer;
  ${mobile({ margin: "0px 5px" })}
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  margin: 25px 0px;
`;
const Amount = styled.span`
  display: flex;
  margin: -6px 10px;
  width: 35px;
  height: 35px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  border: 1px solid #f08080;
  cursor: pointer;
  ${mobile({ marginTop: "-6px" })}
`;

const Button = styled.button`
  padding: 10px;
  font-weight: 500;
  font-weight: bold;
  background-color: #f08080;
  color: white;
  border: none;
  border-radius: 2px;
  border: 1px solid #ffffff;
  ${mobile({ marginTop: "0px" })}
  &:hover {
    color: #f08080;
    background-color: white;
    border: none;
    transition: 0.7s;
    border-radius: 2px;
    border: 1px solid #f08080;
    cursor: pointer;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Best Price</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            vero iure vel harum? Magni reiciendis ducimus, iste unde aliquid
            iusto laboriosam quis ab perspiciatis impedit ullam accusamus
            aliquam cupiditate ipsum.
          </Desc>
          <hr style={{ marginBottom: "60px" }} />
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterColor color="green" />
              <FilterColor color="black" />
              <FilterColor color="blue" />
            </Filter>

            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add To Card</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
