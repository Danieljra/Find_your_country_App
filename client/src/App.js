import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing/landing";
import Home from "./components/home/home";
import DetailCountry from "./components/DetailCountry/DetailCountry";
import CreateActivity from "./components/CreateActivity/CreateActivity";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/home/:id" element={<DetailCountry />} />
          <Route path="/createActivity" element={<CreateActivity />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
