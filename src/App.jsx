import { Outlet } from "react-router-dom";
import { Footer, Footer1, Header } from "./components";
import { ThemeProvider } from "./context/theme";
import { useEffect, useState } from "react";

function App() {
  
  const initialThemeMode = localStorage.getItem('themeMode') || 'light';
  const [themeMode, setThemeMode] = useState(initialThemeMode);

  const lightTheme=()=>{
    setThemeMode('light')
  }
  const darkTheme=()=>{
    setThemeMode('dark')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode);
    localStorage.setItem('themeMode', themeMode);
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
       
      <Header/> 
      <main>
      <Outlet/>
      </main>
      <Footer/>
      <Footer1/>
    </ThemeProvider>
  ) 
}

export default App
