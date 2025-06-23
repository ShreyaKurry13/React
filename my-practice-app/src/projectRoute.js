import {BrowserRouter ,Routes ,Route} from "react-router";
import App from "./components/App";
import ShowCars from "./components/ShowCars";
import AddCars from "./components/AddCars";
import DeleteCar from "./components/DeleteCar";

const projectRoute = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="show-cars" element={<ShowCars/>}/>
                <Route path="add-cars" element={<AddCars/>}/>
                <Route path="delete-cars" element={<DeleteCar/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);

export default projectRoute;