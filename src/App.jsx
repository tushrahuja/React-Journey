import Greeting from "./components/Greeting";
import IconComponent from "./components/IconComponent";
import ProfileCard from "./components/ProfileCard";
import StyleCard from "./components/StyleCard";


const App = () => {
  return (
    <section>
      <StyleCard />
      <ProfileCard />
      <IconComponent />
    </section>
  );
};

export default App;