import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Catogry from "./Components/Catogry";
import Cards from "./Components/Card";
import { items } from "./Data";
import { useState } from "react";
function App() {
  const [itemsData, setItemsData] = useState(items);

  // get all catgory unique
  const allCategory = ["الكل", ...new Set(items.map((i) => i.category))];
  // لا تتكرر [...new Set()]

  //filter by catogory
  const filterByCatogory = (cate) => {
    if (cate === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cate);
      setItemsData(newArr);
    }
  };

  //filter by search
  const filterBySearch = (word) => {
    if (word === "") {
      const newArr = items.filter((item) => item.title === word);
      setItemsData(newArr);
    }
  };
  return (
    <div className="App">
      <NavBar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Catogry
          filterByCatogory={filterByCatogory}
          allCategory={allCategory}
        />
        <Cards itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
