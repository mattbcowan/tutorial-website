import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
