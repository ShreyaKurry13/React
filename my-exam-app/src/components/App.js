import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      {/* <Footer/> */}
    </>
  );
}

export default App;
