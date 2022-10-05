import { useState } from "react";
import FormComp from "./components/FormComp";
import TableComp from "./components/TableComp";

function App() {
  const [display, setDisplay] = useState(false);
  return (
    <div className="App">
      <FormComp setDisplay={setDisplay} />
      {/* {display ? <TableComp /> : ""} */}
      {display && <TableComp />}
    </div>
  );
}

export default App;
