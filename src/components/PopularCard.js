import { Link } from "react-router-dom";

function PopularCard() {
    return ( 
        <div className=" collection_box collecton_box_small">
                    <Link to="pages/explore.html">
                      <div className="overlay d-flex flex-column justify-content-end  p-4 ">
                        <h4 className="collectio_card_title">Art Collection</h4>
                        <p className="item_info">458 Items</p>
                      </div>
                      <img className="img-fluid" src="assets/images/banner/collection_5.png" alt="error !" />
                    </Link>
                  </div>
     );
}

export default PopularCard;