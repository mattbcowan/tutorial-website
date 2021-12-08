import styled from "styled-components";
import { AiOutlineVideoCamera, AiOutlineFileText } from "react-icons/ai";

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
  z-index: 2;
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

const CardBackground = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: 100% center;
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const MediaIcon = styled.span`
  font-size: 2rem;
`;

const TutorialCard = () => {
  return (
    <CardContainer>
      <CardContent>
        <CardWrapper>
          <CardHeader>
            <HeaderSection>
              <MediaIcon>
                <AiOutlineVideoCamera />
              </MediaIcon>
              <span>4 Parts</span>
            </HeaderSection>
            <HeaderSection>
              <span>Beginner</span>
            </HeaderSection>
          </CardHeader>
          <div>How to Clean Shoes</div>
        </CardWrapper>
      </CardContent>
      <CardBackground
        img={
          "https://images.unsplash.com/photo-1638984498411-345388047a8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
        }
      />
    </CardContainer>
  );
};

export default TutorialCard;
