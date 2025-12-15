import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./Pages/Home";
import SingleArt from "./Pages/SingleArt";
import MyFavArt from "./Pages/MyFavArt";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/detail" element={<SingleArt />} />
          <Route path="/myfav" element={<MyFavArt />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
