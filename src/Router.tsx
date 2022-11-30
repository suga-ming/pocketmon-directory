import { BrowserRouter, Routes, Route } from "react-router-dom";
import PocketmonCard from "./components/PocketmonCardList";
import Home from "./page/Home";
import PocketmonDetail from "./page/PocketmonDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/pocketmon/:id" element={<PocketmonDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
