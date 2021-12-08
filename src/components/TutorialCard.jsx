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
  padding: 0.75rem;
  height: inherit;
  justify-content: space-between;
  box-sizing: inherit;
`;

const CardImgContainer = styled.div`
  height: 80%;
  width: 100%;
  overflow: hidden;
  border-radius: 1rem;
  background-position: top;
  background-size: cover;
`;

const CardImg = styled.img`
  width: 100%;
`;

const CardFooter = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
`;

const TutorialCard = () => {
  return (
    <CardContainer>
      <CardContent>
        <CardWrapper>
          <CardImgContainer>
            <CardImg
              src="https://images.unsplash.com/photo-1638864031355-ae1bf0f3717e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
              alt="A burger"
            />
          </CardImgContainer>
          <CardFooter>
            <div>Bottom Content</div>
          </CardFooter>
        </CardWrapper>
      </CardContent>
    </CardContainer>
  );
};

export default TutorialCard;
