import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  font-family: "Rubik", sans-serif;
  font-size: 18px;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 1rem;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
  }
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
