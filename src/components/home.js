import React from "react";
import styled from "styled-components";
import Section from "./section";

function home() {
  return (
    <Container>
      <Section
        title={`Model S`}
        description={`Order online for Touchless Delivery`}
        backgroundImage={`model-s.jpg`}
        leftButtonText={`Custom Order`}
        rightButtonText={`Existing Inventory`}
      />
      <Section
        title={`Model Y`}
        description={`Order online for Touchless Delivery`}
        backgroundImage={`model-y.jpg`}
        leftButtonText={`Custom Order`}
        rightButtonText={`Existing Inventory`}
      />
      <Section
        title={`Model 3`}
        description={`Order online for Touchless Delivery`}
        backgroundImage={`model-3.jpg`}
        leftButtonText={`Custom Order`}
        rightButtonText={`Existing Inventory`}
      />{" "}
      <Section
        title={`Model X`}
        description={`Order online for Touchless Delivery`}
        backgroundImage={`model-x.jpg`}
        leftButtonText={`Custom Order`}
        rightButtonText={`Existing Inventory`}
      />
      <Section
        title={`Lowest Cost Solar Panels in Manchester`}
        description={`Money-back guarantee`}
        backgroundImage={`solar-panel.jpg`}
        leftButtonText={`Order now`}
        rightButtonText={`Learn more`}
      />
      <Section
        title={`Solar for New Roofs`}
        description={`Solar Roof Costs Less Than a New Roof Plus Solar Panels`}
        backgroundImage={`solar-roof.jpg`}
        leftButtonText={`Order now`}
        rightButtonText={`Learn more`}
      />
      <Section
        title={`Accessories`}
        description={``}
        backgroundImage={`accessories.jpg`}
        leftButtonText={`Shop now`}
        rightButtonText={``}
      />
    </Container>
  );
}

export default home;

const Container = styled.div`
  height: 100vh;
`;
