import AboutNFT from '../../components/home/AboutNFT';
import ExploreSection from '../../components/home/ExploreSection';
import HeroSection from '../../components/home/HeroSection';
import InfoCardSection from '../../components/home/InfoCardSection';
import InfoCounter from '../../components/home/InfoCounterSection';
import LatestUpdateSection from '../../components/home/LatestUpdateSection';
import LiveAuctionSection from '../../components/home/LiveAuctionSection';
import PopularCollectionSection from '../../components/home/PopularCollectionSection';
import '../../styles/homepage.css';


function Home() {
    return ( 
       <>
       <HeroSection/>
       <InfoCounter/>
       <AboutNFT/>
       <InfoCardSection/>
       <PopularCollectionSection/>
       <LiveAuctionSection/>
       <ExploreSection/>
       <LatestUpdateSection/>
       </>
     );
}

export default Home;