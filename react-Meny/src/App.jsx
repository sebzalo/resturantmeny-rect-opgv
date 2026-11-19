import "./App.css";
//importere styling filen
import Dish from "./components/DishCard1.jsx";

function App() {
  return (
    <>
      <Meny2 DishCard1={Dish} />
    </>
    // husk og bruk <Meny /> i andre filer med som skal exportes eller imports
  );
}

export default App;
