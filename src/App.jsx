import { Outlet } from "react-router-dom";
import { Footer, Footer1, Header } from "./components";

function App() {
  return (
    <>
       
      <Header/> 
      <main>
      <Outlet/>
      </main>
      <Footer/>
      <Footer1/>
    </>
  ) 
}

export default App
