import { Link } from "react-router-dom";

function AboutNFT() {
    return ( 
      <section id="about-nft">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="about-nft-image p-5 p-md-0">
              <img className="img-fluid" src={require("../../images/loot_boxes 2.png")} alt="Loot box"/>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="about-nft-details theme-text-color">
              <h2 className="mb-3 section_title">Create, Sell & Collect 
                NFTs at NFTPro</h2>
                <p>NFTs are the latest and greatest application of blockchain technology, and marketplace has become theplatform for NFT. List the collection & artworks to the blockchain network acts as the decentralized ledger that tracks the ownership.</p>
                <Link className="btn theme-text-color fill-theme-btn mt-5"> <span>Discover More</span> </Link>
            </div>
          </div>
        </div>
      </div>
      
    </section>
     );
}

export default AboutNFT;