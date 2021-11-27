import React from "react";

import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(32, 22, 22, 0.219), rgba(255, 255, 255, 0)),
    url("https://www.teahub.io/photos/full/182-1825721_full-hd-banner-background.jpg")
      center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  ${mobile({width: "80%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 15px 10px 0px 0px;
  padding: 10px;
  outline: none;
  ${mobile({ width:"70%" })}
`;

const Button = styled.button`
  width: 200px;
  padding: 10px;
  font-weight: 500;
  font-weight: bold;
  background-color: #f08080;
  color: white;
  border: none;
  border-radius: 2px;
  margin: 30px;
  border: 1px solid #ffffff;
  ${mobile({ margin:"15px", width: "150px" })}
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

const Link = styled.a`
text-decoration: underline;
cursor: pointer;

margin: 10px 0px;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>Login</Button>

          <Link>Do not you remember the password?</Link>
          <Link>Create an new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
