import styled from "styled-components";
import { AiOutlineVideoCamera } from "react-icons/ai";

const Container = styled.div`
  position: relative;
  margin: 1rem;
`;

const BackgroundContainer = styled.div`
  aspect-ratio: 6/4;
  width: 90%;
  border-radius: 1rem;
  background-color: #ff8f7b;
  position: relative;
  z-index: 1;
  display: flex;
  padding-left: 1rem;
  padding-bottom: 1rem;
  align-items: flex-end;
  transform-origin: bottom right;
  transition: all 250ms ease;
`;

const CardContainer = styled.div`
  aspect-ratio: 6/4;
  width: 100%;
  border-radius: 1rem;
  background-color: #000;
  color: #fff;
  background-size: cover;
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  cursor: pointer;
  transform-origin: bottom right;
  transition: all 250ms ease;
  z-index: 2;
  &:hover {
    transform: rotate(5deg);
    box-shadow: -10px 10px 12px 0 rgba(0, 0, 0, 0.3);
  }

  &:hover + ${BackgroundContainer} {
    transform: rotate(-5deg);
  }
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

const CardSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  opacity: 0.7;
`;

const MediaIcon = styled.span`
  font-size: 2rem;
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;

  span {
    text-align: right;
  }
`;

const AvatarImg = styled.img`
  border-radius: 48px;
  overflow: hidden;
  margin-left: 0.5rem;
`;

const TutorialCard = () => {
  return (
    <Container>
      <CardContainer>
        <CardContent>
          <CardWrapper>
            <CardSection>
              <HeaderSection>
                <MediaIcon>
                  <AiOutlineVideoCamera />
                </MediaIcon>
                <span>4 Parts</span>
              </HeaderSection>
              <HeaderSection>
                <span>Beginner</span>
              </HeaderSection>
            </CardSection>
            <CardSection>
              <div>How to Clean Shoes</div>
              <Avatar>
                <span>Michelle Johnson</span>
                <AvatarImg src="https://via.placeholder.com/48" alt="Avatar" />
              </Avatar>
            </CardSection>
          </CardWrapper>
        </CardContent>
        <CardBackground
          img={
            "https://images.unsplash.com/photo-1638984498411-345388047a8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
          }
        />
      </CardContainer>
      <BackgroundContainer>
        <span>Start Me!</span>
      </BackgroundContainer>
    </Container>
  );
};

export default TutorialCard;
