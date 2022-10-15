import "./App.css";
import Login from "./component/login/index";
import Singup from "./component/signup/signup";
import Profile from "./component/profile/index";
import Product from "./component/product/Product";
import Onlineshop from "./component/Onlineshop/Onilineshop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adduser from "./component/Adduser/Adduser";
import Navbar from "./component/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>{" "}
        <Routes>
          <Route
            path="/Onlineshop"
            element={<Onlineshop home={"this is my home"}></Onlineshop>}
          ></Route>
          <Route exact path="/Adduser" element={<Adduser></Adduser>}></Route>
          <Route exact path="/Product" element={<Product></Product>}></Route>
          <Route exact path="/signup" element={<Singup></Singup>}></Route>
          <Route exact path="/Profile" element={<Profile></Profile>}></Route>
          <Route exact path="/Login" element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
