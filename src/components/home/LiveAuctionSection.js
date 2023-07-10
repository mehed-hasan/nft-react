import { Link } from "react-router-dom";
import { liveAcution } from "../../data/api";
import AuctionCard from "../AuctionCard";

function LiveAuctionSection() {
    return ( 
        <section id="live_auction">
      <div className="section_heading text-center theme-text-color">
        <p>Auction</p>
          <h2 className="section_title">Live Auctions</h2>
      </div>


      <div className="container">

        <div className="row">
            {
              liveAcution.map((item)=>
              <div className="col-12 col-md-6 col-lg-4">
                <AuctionCard data={item}/>
                </div>
              )
            }

      </div>
      </div>
    </section>

     );
}

export default LiveAuctionSection;