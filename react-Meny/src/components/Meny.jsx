import "DishCard.jsx";

export default function MenyList(props) {
  // eg exporter function videre til app.jsx
  //  bruker propsa som var kort elementene fra dishCard
  // filen.
  return (
    <>
      <h1>min Meny</h1>
      {props.Meny?.map((food) => (
        <DishCard key={food.id} {...food} />
      ))}
      ;
    </>
  );
}
