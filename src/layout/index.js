import BrandSection from "../components/common/BrandSection";
import Footer from "../components/common/FooterSection";
import Nav from "../components/common/Nav";
import NewsLetter from "../components/common/NewsLetterSection";
import Preloader from "../components/common/Preloader";
import TinyFooter from "../components/common/TinyFooterSection";
import '../styles/homepage.css';

function Layout ({children,changeThemeMode}) {
  return ( 
    
<main className="bg-dark" >
  <div className="cursor"></div>
    <Preloader/>
    <main>
      <Nav changeThemeModeFunction={changeThemeMode} />
      {children}
    </main>
    <NewsLetter/>
    <BrandSection/>
    <Footer/>
    <TinyFooter/>

</main>

   );
}

export default Layout;