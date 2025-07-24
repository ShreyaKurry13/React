import App from "./components/App"
import {BrowserRouter, Route, Routes} from 'react-router'
import Prime from "./components/Prime";
import ChatBot from "./components/ChatBot";
import Sos from "./components/Sos";
import Home from "./components/Home";

const projectRoute = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/home" element={<Home/>}/>
                <Route path="/prime" element={<Prime/>}/>
                <Route path="/bot" element={<ChatBot/>}/>
                <Route path="/sos" element={<Sos/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);

export default projectRoute;