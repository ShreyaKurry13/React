import {BrowserRouter ,Routes ,Route} from "react-router";
import App from "./components/App";
import ShowCars from "./components/ShowCars";
import AddCars from "./components/AddCars";

const projectRoute = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="show-cars" element={<ShowCars/>}/>
            <Route path="add-cars" element={<AddCars/>}/>
        </Routes>
    </BrowserRouter>
)

export default projectRoute;