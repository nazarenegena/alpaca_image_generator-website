import styled from "styled-components";
import ImageDisplay from "./sections/ImageDisplay";
import Content from "./sections/Content";

const Main = styled.div`
  margin: 5rem 10rem 0 10rem;
`;
const AppContent = styled.div`
  display: flex;
  flex-direction: row;
`;
const Title = styled.h1`
  font-family: "Nunito", sans-serif;
  margin-left: 20rem;
  margin-bottom: 2rem;
`;

function App() {
  return (
    <Main>
      <Title>ALPACA GENERATOR</Title>

      <AppContent>
        <div>
          <ImageDisplay />
        </div>

        <div>
          <Content />
        </div>
      </AppContent>
    </Main>
  );
}

export default App;
