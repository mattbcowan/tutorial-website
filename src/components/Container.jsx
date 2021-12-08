import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  font-family: "Rubik", sans-serif;
  font-size: 18px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 2rem 1rem;
  background-color: ${(props) => props.backgroundColor}
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {

  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    /* grid-template-columns: 1fr 1fr 1fr; */
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
  }
`;

const Container = ({ children, backgroundColor }) => {
  return (
    <StyledContainer backgroundColor={backgroundColor}>
      {children}
    </StyledContainer>
  );
};

export default Container;
