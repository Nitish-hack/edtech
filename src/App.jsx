import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Admin from "./Admin";
import NotFound from "./NotFound";

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
