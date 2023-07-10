import { Link } from "react-router-dom";
import { lootSection } from "../../data/api";

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
              <h2 className="mb-3 section_title">{lootSection.lootHeading}</h2>
                <p>{lootSection.lootSubHeading}</p>
                <Link className="btn theme-text-color fill-theme-btn mt-5"> <span>Discover More</span> </Link>
            </div>
          </div>
        </div>
      </div>
      
    </section>
     );
}

export default AboutNFT;