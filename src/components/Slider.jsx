import React from "react";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: lightpink;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Warpper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slider * -100}vw);
  transition: all 1s;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgCon = styled.div`
  flex: 1;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const InfoCon = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
`;
const Desc = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;
const Button = styled.button`
  padding: 10px;
  font-weight: 500;
  font-weight: bold;
  background-color: #f08080;
  color: white;
  border: none;
  border-radius: 2px;
  &:hover {
    color: #f08080;
    background-color: white;
    transition: 0.5s;
    border-radius: 2px;
  }
`;

const Slider = () => {
  const [slider, setSlider] = useState(0);

  const handleEventClick = (direction) => {
    if (direction === "left") {
      setSlider(slider > 0 ? slider - 1 : 3);
    } else {
      setSlider(slider < 3 ? slider + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleEventClick("left")}>
        <ArrowLeft />
      </Arrow>
      <Warpper slider={slider}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgCon>
              <Image src={item.img} />
            </ImgCon>
            <InfoCon>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Shop Now</Button>
            </InfoCon>
          </Slide>
        ))}
      </Warpper>
      <Arrow direction="right" onClick={() => handleEventClick("right")}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
