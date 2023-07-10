import AuctionCard from "../../components/AuctionCard";
import { liveAcution } from "../../data/api";

function LiveAcution() {
    return ( 

        <section className="container" id="live_auction">
        <div className="section_heading text-start theme-text-color">
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

export default LiveAcution;