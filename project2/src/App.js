import { CartProvider } from './component/ContextReducer';
import './App.css';


import './App.css';
import Home from './screen/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './screen/Login';
import Signup from './screen/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyOrder from './screen/MyOrder';



function App() {
  return (
    <div className="flex-body">
 <CartProvider>
    <Router>
    <div >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/creatuser" element={<Signup />} />
      <Route path="/myorder" element={<MyOrder />} />

    </Routes>
    </div>
  </Router>
  </CartProvider>
    </div>
   
  );
}

export default App;
