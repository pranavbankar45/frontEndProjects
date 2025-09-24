import "./App.css";
import Card from "./Component/Card";


function App() {
  return (
    <>
      <h1 className="text-black bg-orange-400 p-3 m-5 rounded-xl">
        Tailwind Test
      </h1>

      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
     <Card userName={"Pranav"}/>
      <Card userName={"Ram "}/>
      <Card  userName={"Harish"}/>
      

    </>
  );
}

export default App;
