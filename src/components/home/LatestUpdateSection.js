import { Link } from "react-router-dom";

function LatestUpdateSection() {
    return ( 
        <section className="latest_update_section">

      <div className="section_heading text-center theme-text-color">
        <p>Blogs</p>
          <h2 className="section_title">
            Latest Updates
          </h2>

      </div>


      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6" >
            <div className=" latest_update collection_box_medium ">
              <Link to="#!">
                <div className="overlay d-flex flex-column justify-content-end  p-1 p-md-2 p-lg-4 theme-text-color mb-4 mb-md-2 mb-lg-0">
                  <div className="author_info d-flex gap-4 align-items-center">
                    <div className="d-flex gap-2">
                      <img src={require("../../images/icons/user_small.png")} alt="error"/> <span>John Mack</span>
                    </div>
                    <div className="d-flex gap-2">
                      <img src={require("../../images/icons/calender.png")} alt="error"/> <span>Published: 12 Oct 2022</span>
                    </div>
                  </div>
                  <h4 className="collection_card_title">Emotes contest prepare your best moves for the metaverse music festival</h4>
                </div>
                <img className="img-fluid" src={require("../../images/banner/latest_banner.png")} alt="error !" />
              </Link>
          </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">   
              <div className="col-12">
                <div className=" latest_update collecton_box_small">
                  <Link to="#!">
                    <div className="overlay d-flex flex-column justify-content-end  p-1 p-md-2 p-lg-4 theme-text-color mb-4 mb-md-2 mb-lg-0">
                      <div className="author_info d-flex gap-4 align-items-center">
                        <div className="d-flex gap-2">
                          <img src={require("../../images/icons/user_small.png")} alt="error"/> <span>John Mack</span>
                        </div>
                        <div className="d-flex gap-2">
                          <img src={require("../../images/icons/calender.png")} alt="error"/> <span>Published: 12 Oct 2022</span>
                        </div>
                      </div>
                      <h4 className="collection_card_title">Emotes contest prepare your best moves for the metaverse music festival</h4>
                     
                    </div>
                    <img className="img-fluid" src={require("../../images/banner/latest_banner_2.png")} alt="error !" />
                  </Link>
                </div>
              </div>
              <div className="col-12 mt-4"> 
                <div className=" latest_update collecton_box_small">
                  <Link to="#!">
                    <div className="overlay d-flex flex-column justify-content-end  p-1 p-md-2 p-lg-4 theme-text-color mb-4 mb-md-2 mb-lg-0">
                      <div className="author_info d-flex gap-4 align-items-center">
                        <div className="d-flex gap-2">
                          <img src={require("../../images/icons/user_small.png")} alt="error"/> <span>John Mack</span>
                        </div>
                        <div className="d-flex gap-2">
                          <img src={require("../../images/icons/calender.png")} alt="error"/> <span>Published: 12 Oct 2022</span>
                        </div>
                      </div>
                      <h4 className="collection_card_title">Emotes contest prepare your best moves for the metaverse music festival</h4>
                    </div>
                    <img className="img-fluid" src={require("../../images/banner/latest_banenr_3.png")} alt="error !" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
     );
}

export default LatestUpdateSection;