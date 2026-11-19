import Dish from "./DishCard1.jsx";

export default function Meny(Menu) {
  // eg exporter function videre til app.jsx
  //  bruker propsa som var kort elementene fra dishCard
  // filen.
  return (
    <>
    <h1>min Meny</h1>
    {Menu.map((food) => (
      <Dish key={food.id} {...food} />
    ))} 
    ;
    </>
  );
}
