import { Route, Routes } from "react-router-dom";
import { Todo } from "./Pages/Todo/Todo";
import { Home } from "./Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
      
    </>
  );
}

export default App;
