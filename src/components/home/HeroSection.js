import { Link } from "react-router-dom";

function HeroSection() {
    return ( 
        <section id="home_page_hero" className=" pt-3 mt-5">
        <div className="container">
            <div className="row align-items-center text-center text-md-start">
                <div className="col-12 col-md-6 ">
                    <div className="theme-text-color home_hero">
                        <h1>Explore, Buy, Sell, Trade, And Store NFTs</h1>
                        <p>Join the world's biggest NFT marketplace and discover truely rare digital artwork, sound, videos etc</p>

                        <div className="hero-banner-btn-group d-flex justify-content-center justify-content-md-start  gap-4">
                          <Link to="pages/explore.html" className="btn  them-btn border-gradient   fill-theme-btn mt-5 "> <span>Explore Now</span> </Link>
                          <Link to="pages/live_auction.html" className="btn  them-btn border-gradient   fill-theme-btn mt-5 "> <span>Discover More</span> </Link>
                        </div>
                    </div>
                </div>
    
                <div className="col-12 col-md-6 ">
                    <img className="img-fluid p-5" src={require("../../images/banner/bitcoin.png")} alt="bitcoin-image" />
                </div>
            </div>
        </div>
        
    </section>

     );
}

export default HeroSection;