import Container from "./components/Container";
import TutorialCard from "./components/TutorialCard";

let data = require("./data.json");

function App() {
  return (
    <Container>
      {data.map((e) => {
        return (
          <TutorialCard
            title={e.title}
            author={e.author}
            image={e.image}
            parts={e.parts}
            skillLevel={e.skillLevel}
            icon={e.icon}
            backgroundColor={e.backgroundColor}
          />
        );
      })}
    </Container>
  );
}

export default App;
