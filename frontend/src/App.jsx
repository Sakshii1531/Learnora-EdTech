import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from '/src/components/common/Navbar';

function App() {
  return (
    <div className='w-screen min-h-screen bg-[#001B22] flex flex-col'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
