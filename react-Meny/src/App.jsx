import "./App.css";
//importere styling filen
import Meny from "./components/MenyList";
//importer funksjonen Menylsit fra Meny
import { dishes } from "./data/MenyData";

function App() {
  return (
    <>
      <Meny dishes={dishes} />
    </>
    // husk og bruk <Meny /> i andre filer med som skal exportes eller imports
  );
}

export default App;
