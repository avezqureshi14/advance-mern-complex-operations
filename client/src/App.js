import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MemoriesNavBar from "./components/Header";
import Home from "./Pages/Home";
import { getPosts } from "./actions/posts";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
function App() {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])
  return (
    <>
      <Router>
        <MemoriesNavBar />
        <Routes>
          <Route path="/" element={<Home currentId={currentId} setCurrentId={setCurrentId} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
