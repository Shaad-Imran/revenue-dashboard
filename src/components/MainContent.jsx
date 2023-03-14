import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Earnings from "./Earnings";
import Info from "./Info";
import JoinSlack from "./JoinSlack";
import ProjectRecommendation from "./ProjectRecommendation";
import Projects from "./Projects";
import Invoices from "./Invoices";

const MainContent = () => {
  return (
    <Container>
      <Navbar />

      <SubContainer>
        <SectionOne>
          <ColumnOne1>
            <Earnings />
            <Info />
          </ColumnOne1>
          <ColumnTwo1>
            <TitleText>Your Projects</TitleText>
            <Projects />
          </ColumnTwo1>
        </SectionOne>

        <SectionTwo>
          <ColumnOne2>
            <InvoiceContainer>
              <TitleText>Recent Invoices</TitleText>
              <Invoices />
            </InvoiceContainer>
            <JoinSlack />
          </ColumnOne2>
          <ColumnTwo2>
            <TitleText>Recommended Project</TitleText>
            <ProjectRecommendation />
          </ColumnTwo2>
        </SectionTwo>
      </SubContainer>
    </Container>
  );
};

const Container = styled.div`
  border: 2px solid yellow;
  width: 80%;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
`;

const SubContainer = styled.div`
  border: 2px solid blue;
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const SectionOne = styled.div`
  border: 2px solid gray;
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
`;

const ColumnOne1 = styled.div`
  border: 2px solid orange;
  display: flex;
  gap: 3rem;
`;

const ColumnTwo1 = styled.div`
  border: 2px solid orange;

  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
`;

const TitleText = styled.h3`
  height: 20%;
  /* padding-top */
`;

const SectionTwo = styled.div`
  border: 2px solid gray;

  display: flex;
  gap: 2rem;
  height: 26vh;
`;

const ColumnOne2 = styled.div`
  border: 2px solid orange;
`;
const InvoiceContainer = styled.div`
  height: 60%;
`;

const ColumnTwo2 = styled.div`
  border: 2px solid orange;
`;

export default MainContent;
