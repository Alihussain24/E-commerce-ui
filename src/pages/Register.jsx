import React from "react";

import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(172, 201, 79, 0.349),
      rgba(112, 12, 12, 0.431)
    ),
    url("https://www.teahub.io/photos/full/72-724868_high-resolution-tree-full-hd-1080p-wallpaper-id.jpg")
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
  background-color: white;  border-radius: 12px;

${mobile({width: "75%"})}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
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
  margin: 10px 10px 0px 0px;
  padding: 10px;
  outline: none;
  ${mobile({width: "80%"})}
`;

const Aggement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
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
  margin-top: 10px;
  border: 1px solid #ffffff;
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

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an new account</Title>
        <Form>
          <Input placeholder="firstname" />
          <Input placeholder="lastname" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />

          <Aggement>
            By creating an account, I consent to the processing of my personal
            data in accrodance with the <b>Privacy policy</b>
          </Aggement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
