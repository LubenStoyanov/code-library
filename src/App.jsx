import { useEffect, useState } from "react";
import useContentful from "./useContentful";
import "./App.css";
import List from "./components/List";

function App() {
  const [anwsers, setAnswers] = useState([]);
  const { getAnwsers } = useContentful();

  useEffect(() => {
    const handleData = async () => {
      try {
        const response = await getAnwsers();
        setAnswers(response.items);
      } catch (error) {
        console.log(error);
      }
    };

    handleData();
  }, []);

  return (
    <div className="App">
      <h1>Code Library</h1>
      <List anwsers={anwsers} />
    </div>
  );
}

export default App;
