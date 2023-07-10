import { Link } from "react-router-dom";

function LatestUpdateCard({data}) {
    return ( 
        <div className=" latest_update collection_box_medium ">
              <Link to="#!">
                <div className="overlay d-flex flex-column justify-content-end  p-1 p-md-2 p-lg-4 theme-text-color mb-4 mb-md-2 mb-lg-0">
                  <div className="author_info d-flex gap-4 align-items-center">
                    <div className="d-flex gap-2">
                      <img src="assets/images/icons/user_small.png" alt="error"/> <span>John Mack</span>
                    </div>
                    <div className="d-flex gap-2">
                      <img src="assets/images/icons/calender.png" alt="error"/> <span>Published: 12 Oct 2022</span>
                    </div>
                  </div>
                  <h4 className="collection_card_title">Emotes contest prepare your best moves for the metaverse music festival</h4>
                </div>
                <img className="img-fluid" src="assets/images/banner/latest_banner.png" alt="error !" />
              </Link>
          </div>
     );
}

export default LatestUpdateCard;