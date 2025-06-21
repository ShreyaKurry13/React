import { BrowserRouter ,Routes, Route  } from "react-router";
import Home from "./components/Home";
import AddRestaurant from "./components/AddRestaurant";
import ShowRestaurant from "./components/ShowRestaurant";
import App from "./components/App";
import Counter from "./components/Counter";
import Comp1 from "./components/Comp1";
import ShowRestClass from "./components/ShowRestClass";
import AddRestClass from "./components/AddRestClass";
import Comp11 from "./components/Comp11";

const projectRoute = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route path="" element={<Home />} />
                <Route path="add-rest" element={<AddRestaurant />} />
                <Route path="show-res" element={<ShowRestaurant />} />
                <Route path="counter" element={<Counter color="green"/>} />
                <Route path="comp1" element={<Comp1 name="person1" age="22"/>} />
                <Route path="showRestClass" element={<ShowRestClass />} />
                <Route path="addRestClass" element={<AddRestClass />} />
                <Route path="search" element={<Comp11 />} />
            </Route>
        </Routes>
  </BrowserRouter>
);

export default projectRoute;