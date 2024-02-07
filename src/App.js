import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbarpage from "./Components/Navbarpage";
import Homepage from "./Components/Homepage";
import LoginSignUp from "./Components/LoginSignUp";
import JoinUs from "./Components/Joinus";
import Scanpage from "./Components/Scanpage";
import Aboutus from "./Components/Aboutus";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navbarpage />}>
            <Route index element={<Homepage />} />
          </Route>
          <Route exact path="/Aboutus" element={<Aboutus />} />
          <Route exact path="/Scanpage" element={<Scanpage />} />
          <Route exact path="/LoginSignUp" element={<LoginSignUp />} />
          <Route exact path="/JoinUs" element={<JoinUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
