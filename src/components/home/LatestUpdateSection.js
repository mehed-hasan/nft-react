import { Link } from "react-router-dom";
import { latest } from "../../data/api";

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
              <Link to="#">
                <div className="overlay d-flex flex-column justify-content-end  p-1 p-md-2 p-lg-4 theme-text-color mb-4 mb-md-2 mb-lg-0">
                  <div className="author_info d-flex gap-4 align-items-center">
                    <div className="d-flex gap-2">
                      <img src={require("../../images/icons/user_small.png")} alt="error"/> <span>{latest[0].name}</span>
                    </div>
                    <div className="d-flex gap-2">
                      <img src={require("../../images/icons/calender.png")} alt="error"/> <span>{latest[0].published}</span>
                    </div>
                  </div>
                  <h4 className="collection_card_title">{latest[0].heading}</h4>
                </div>
                <img className="img-fluid" src={require(`../../images/banner/${latest[0].image}`)} alt="error !" />
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
                          <img src={require("../../images/icons/user_small.png")} alt="error"/> <span>{latest[1].name}</span>
                        </div>
                        <div className="d-flex gap-2">
                          <img src={require("../../images/icons/calender.png")} alt="error"/> <span>{latest[1].published}</span>
                        </div>
                      </div>
                      <h4 className="collection_card_title">{latest[1].heading}</h4>
                     
                    </div>
                    <img className="img-fluid" src={require(`../../images/banner/${latest[1].image}`)} alt="error !" />
                  </Link>
                </div>
              </div>
              <div className="col-12 mt-4"> 
                <div className=" latest_update collecton_box_small">
                  <Link to="#!">
                    <div className="overlay d-flex flex-column justify-content-end  p-1 p-md-2 p-lg-4 theme-text-color mb-4 mb-md-2 mb-lg-0">
                      <div className="author_info d-flex gap-4 align-items-center">
                        <div className="d-flex gap-2">
                          <img src={require("../../images/icons/user_small.png")} alt="error"/> <span>{latest[2].name}</span>
                        </div>
                        <div className="d-flex gap-2">
                          <img src={require("../../images/icons/calender.png")} alt="error"/> <span>{latest[2].published}</span>
                        </div>
                      </div>
                      <h4 className="collection_card_title">{latest[2].heading}</h4>
                    </div>
                    <img className="img-fluid" src={require(`../../images/banner/${latest[2].image}`)} alt="error !" />
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