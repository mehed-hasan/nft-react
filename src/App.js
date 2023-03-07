import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import ExplorePage from './pages/Explore';
import Home from './pages/Home';



function App() {
  
  // true == "night" false == "day"
  const [themeMode, setThemeMode] = useState("day");


  const changeThemeMode = (() =>{
    if(themeMode === "night"){
      setThemeMode("day");
      localStorage.currentTheme = themeMode;

    }else{
      setThemeMode("night");
      localStorage.currentTheme = themeMode;

    }
  });
 
  useEffect(() =>{

    if(localStorage.currentTheme === "day"){
      document.body.style.setProperty("--primary-color", "white");
      document.body.style.setProperty("-nav-button-bg", "#BE1954");
      document.body.style.setProperty("--secondary-color", "#1E3C72");
      document.body.style.setProperty("--light-primary-color", "linear-gradient(180deg, rgba(20, 30, 54, 0.5) 0%, rgba(42, 82, 152, 0.075) 100%)");
      document.body.style.setProperty("--btn-border", "linear-gradient(to right, rgba(30, 60, 114, 1),rgba(42, 82, 152, 0))");
      document.body.style.setProperty("--btn-bg", "linear-gradient(90deg, #7303C0 -7.55%, #EC38BC 99.16%, #F6AFE2 118.12%)");
      document.body.style.setProperty("--btn-color", "#FFFFFF");
      document.body.style.setProperty("--light-bg", "#ffffff");
      document.body.style.setProperty("--card-bg", "rgba(255, 255, 255, 0.5)");
      document.body.style.setProperty("--shrink-color", "rgba(227, 173, 103, 0.9)");
      document.body.style.setProperty("--dark-50", "#ffffff");
      document.body.style.setProperty("--svg-color", "white");
      document.body.style.setProperty("--form-border", "#ec38bc80");
      document.getElementById("sun_svg").style.display = "none"; 
      document.getElementById("moon_svg").style.display = "block";


  }else if (localStorage.currentTheme === "night"){
      document.body.style.setProperty("--primary-color", "#141E36");
      document.body.style.setProperty("-nav-button-bg", "#BE1954");
      document.body.style.setProperty("--secondary-color", "white");
      document.body.style.setProperty("--light-primary-color", "linear-gradient(180deg, rgba(20, 30, 54, 0.5) 0%, rgba(42, 82, 152, 0.075) 100%)");
      document.body.style.setProperty("--btn-border", "linear-gradient(to right, rgba(30, 60, 114, 1),rgba(42, 82, 152, 0))");
      document.body.style.setProperty("--btn-bg", "white");
      document.body.style.setProperty("--btn-color", "#141E36");
      document.body.style.setProperty("--light-bg", "#182546");
      document.body.style.setProperty("--card-bg", "rgba(30, 41, 59, 0.5)");
      document.body.style.setProperty("--shrink-color", "#B9A1FF");
      document.body.style.setProperty("--dark-50", "rgba(30, 41, 59, 0.5)");
      document.body.style.setProperty("--svg-color", "black");
      document.body.style.setProperty("--form-border", "white");
      document.getElementById("moon_svg").style.display = "none"; 
      document.getElementById("sun_svg").style.display = "block"; 



  }
  },[themeMode])

  return (

    <BrowserRouter>
      <Layout changeThemeMode={changeThemeMode}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/explore" element={<ExplorePage/>} />
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
   