import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;