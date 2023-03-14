import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import AvatarImage from "../assets/avatarImage1.jpeg";
import AvatarImage2 from "../assets/avatarImage4.jpg";
import { cardShadow, hoverEffect } from "../utils";

const Invoices = () => {
  return (
    <InvoicesContainer>
      <CardContent>
        <Invoice>
          <Info>
            <Avatar>
              <img src={AvatarImage} alt="Bruce Banner" />
            </Avatar>
            <TextContainer>
              <Title>Bruce Banner</Title>
              <SubTitle>ABC Holdings</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="Paid" paid />
            <Price>$ 1,200.87</Price>
          </Container>
        </Invoice>

        <Invoice>
          <Info>
            <Avatar>
              <img src={AvatarImage2} alt="Peter Parker" />
            </Avatar>
            <TextContainer>
              <Title>Peter Parker</Title>
              <SubTitle>Inchor Associates</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="Late" late />
            <Price>$ 1,200.87</Price>
          </Container>
        </Invoice>
      </CardContent>
    </InvoicesContainer>
  );
};

const InvoicesContainer = styled.div`
  width: 35rem;
  border-radius: 1rem;
  margin-top: 1rem;
  background-color: white;
  height: 140%;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;

const CardContent = styled.div``;
const Invoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  padding-top: 0.6rem;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;
const Avatar = styled.div`
  img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 3.5rem;
  }
`;
const TextContainer = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h4``;
const SubTitle = styled.h5`
  font-weight: 400;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  align-items: center;
`;

const Price = styled.div``;
export default Invoices;
