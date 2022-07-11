import { Routes, Route } from "react-router-dom";
import DetailView from "./DetailView";
import ListView from "./ListView";

const Contents = ()=>{
    return (
      <Routes>
        <Route path="/detail/:id" element={<DetailView />}></Route>
        <Route path="/" element={<ListView />}></Route>
      </Routes>
    );
}

export default Contents;
