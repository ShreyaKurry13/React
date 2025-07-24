import { BrowserRouter, Route, Routes } from 'react-router';
import App from './components/App';
import ShowCar from './components/ShowCar';
import AddCar from './components/AddCar';
import Home from './components/Home';
import InterestCalculator from './components/InterestCalculator';

const projectRoute = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <App/> }>
                    <Route path="/" element={ <Home/> }/>
                    <Route path="show-cars" element={ <ShowCar/> }/>
                    <Route path="add-car" element={ <AddCar/> }/>
                    <Route path="calci" element={ <InterestCalculator/> }/>
            </Route>
        </Routes>
    </BrowserRouter>
);

export default projectRoute;
