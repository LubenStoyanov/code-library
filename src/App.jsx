import { useEffect, useState } from "react";
import useContentful from "./useContentful";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Literature from "./components/Literature";
import Music from "./components/Music";

function App() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [firstLoad, setFirstLoad] = useState(true);
  const { getData } = useContentful();

  // useEffect(() => {
  //   const handleData = async () => {
  //     try {
  //       const response = await getData();
  //       setResults(response.items);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   handleData();
  // }, []);
  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      return () => true;
    }
    const handleData = async () => {
      try {
        const data = await getData(search);
        setResults(data.items);
      } catch (error) {
        console.log("my error", error);
      }
    };
    handleData();
    return () => true;
  }, [search]);

  return (
    <div className="App">
      <h1>Fine Arts</h1>
      <Searchbar setSearch={setSearch} />
      <div style={{ display: "flex", gap: 100 }}>
        <Literature />
        <Music />
      </div>
    </div>
  );
}

export default App;
