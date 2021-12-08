import styled from "styled-components";

const CardContainer = styled.div`
  aspect-ratio: 6/4;
  width: 100%;
  border-radius: 1rem;
  background-color: purple;
  color: #fff;
  background-size: cover;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`;

const CardContent = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  display: block;
  box-sizing: inherit;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-flow: column;
  padding: 1.5rem;
  height: inherit;
  justify-content: space-between;
  box-sizing: inherit;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const TutorialCard = () => {
  return (
    <CardContainer>
      <CardContent>
        <CardWrapper>
          <CardHeader>
            <HeaderSection>
              <span>4 Parts</span>
              <span>Text</span>
            </HeaderSection>
            <HeaderSection>
              <span>Beginner</span>
            </HeaderSection>
          </CardHeader>
          <div>Bottom Content</div>
        </CardWrapper>
      </CardContent>
    </CardContainer>
  );
};

export default TutorialCard;
