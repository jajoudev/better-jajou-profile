import Contact from "./components/Pages/Contact/Contact";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

function App() {
  return (
    <>
      <BurgerMenu sizeIcon={35} colorIcon="white"  />
      <Contact />
    </>
  );
}

export default App;
