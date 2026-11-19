import "./App.css";
//importere styling filen
import { Meny }from "./components/Meny2.jsx";
import { Menu } from "./data/Menu.js";


export default function App() {
  return (
    <>
      <Meny Menu={Menu} />
      
    </>
    // husk og bruk <Meny /> i andre filer med som skal exportes eller imports
  );
}

