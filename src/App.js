import Countries from "./components/Countries";
import SingleCoutry from "./components/SingleCoutry";

import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries />}></Route>
        <Route path="/:ccn3" element={<SingleCoutry />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
