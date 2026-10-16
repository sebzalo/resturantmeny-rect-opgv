export default function DishCard({ tittel, pris, ingredienser, kategori }) {
  // eg exporter function som defult for og bare exporter den function
  //  og legger til
  // kort elementer i parameter
  // som blir til props i meny filen
  return (
    //her tar eg og styler en border på meny kortet i en div
    <div style={{ border: "solid white" }}>
      <h2>{tittel}</h2>
      <h2>{pris}</h2>
      <p>{ingredienser}</p>
      <p>{kategori}</p>
    </div>
  );
}
