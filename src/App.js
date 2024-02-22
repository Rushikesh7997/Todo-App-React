import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Notes } from "./pages/Notes";
import { CreateNote } from "./pages/CreateNote";
import { EditNote } from "./pages/EditNote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notes></Notes>} />
        <Route path="/create-note" element={<CreateNote></CreateNote>} />
        <Route path="/edit-note/:id" element={<EditNote></EditNote>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
