import Dish from "./DishCard1.jsx";


 export function Meny({Dish}) {
  // eg exporter function videre til app.jsx
  //  bruker propsa som var kort elementene fra dishCard
  // filen.
  <p>min Meny</p>
  return (
    <div className="Meny">
     
    {Meny.Map(() => ( 
      <Dish key={tittle.id} {...Dish} />
    ))};    
    </div>
  );
}

