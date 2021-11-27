import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  height: 60px;
  background-color: #f0808024;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 3px" })}
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
`;

const Language = styled.span`
  font-size: 15px;
  cursor: pointer;
  ${mobile({ fontSize: "10px" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightcoral;
  display: flex;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "4px" })}
`;
const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "40px" })}
`;

const Center = styled.div`
  flex: 1;
  align-items: center;
  text-align: center;
  ${mobile({ textAlign: "left", flex: "1" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "14px", marginLeft: "20px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ textAlign: "left", flex: "2" })}
`;

const MenuLink = styled.div`
  font-size: 15px;
  cursor: pointer;
  margin-right: 15px;
  ${mobile({ fontSize: "10px", display: "flex" })}
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input />
              <Search style={{ color: "gray", fontSize: "18" }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>Sofi Shop</Logo>
          </Center>
          <Right>
            <MenuLink>REGISTER</MenuLink>
            <MenuLink>SIGN IN</MenuLink>
            <MenuLink>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuLink>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
