import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import Detail from "./page/detail";
import Header from "./components/header";


const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:country" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;