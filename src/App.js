import { useEffect, useReducer, useState } from "react";
import { API } from "./Api/Api";
import BasketReducer, {initialState,} from "./Components/BasketReducer/BasketReducer";
import { Contexts } from "./Components/Context/Context";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import { Route, Routes } from "react-router-dom";
import UseInput from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import ProductRoutes from "./Components/Routes/ProductPoutes";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    fetch(`${API}/products`)
      .then((response) => response.json())
      .then((info) => setData(info));
  }, []);
  console.log(data, "APP DATA");

  const [state, dispatch] = useReducer(BasketReducer, initialState);
  // console.log(state, 'APP');

  return (
    <div className="App">
      <Contexts.Provider
        value={{ show, setShow, data, state, dispatch, login, setLogin }}
      >
        <Header />
        <Routes>
          <Route element={<ProductRoutes />}>
            <Route path="/register" element={<UseInput />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element="404 Error Page" />
        </Routes>
      </Contexts.Provider>
    </div>
  );
}

export default App;
