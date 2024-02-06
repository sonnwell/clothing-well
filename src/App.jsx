import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/auth/Auth";
import SignUp from "./components/sign-up-form/SignUp";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path="shop" element={<Shop />}/>
        <Route path="auth" element={<SignIn />}/>
        <Route path="auth/sign-up" element={<SignUp />}/>
      </Route>
    </Routes>
  )
};

export default App;
