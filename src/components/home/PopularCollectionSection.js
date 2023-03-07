import { Link } from "react-router-dom";

function PopularCollectionSection() {
    return ( 
        <section className="popular_collection ">
      
        <div className="section_heading text-center theme-text-color">
          <p>Collection</p>
            <h2 className="section_title">
              Popular Collection
            </h2>
  
        </div>
  
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mb-4  mb-lg-0">
              <div className=" collection_box collection_box_medium">
                <Link to="pages/explore.html">
                  <div className="overlay d-flex flex-column justify-content-end  p-4 ">
                    <h4 className="collectio_card_title">Autumn Art Concept</h4>
                    <p className="item_info">458 Items</p>
                  </div>
                  <img className="img-fluid" src={require("../../images/banner/autumn_collection.png")} alt="error !" />
                </Link>
                </div>
            </div>
            <div className="col-12 col-md-6 mb-4  mb-lg-0">
              <div className="row">   
                <div className="col-6 ">
                  <div className=" collection_box collecton_box_small">
                    <Link to="pages/explore.html">
                      <div className="overlay d-flex flex-column justify-content-end  p-4 ">
                        <h4 className="collectio_card_title">Art Collection</h4>
                        <p className="item_info">458 Items</p>
                      </div>
                      <img className="img-fluid" src={require("../..//images/banner/collection_1.png")} alt="error !" />
                    </Link>
                  </div>
                </div>
                <div className="col-6">
                  <div className=" collection_box collecton_box_small">
                    <Link to="pages/explore.html">
                      <div className="overlay d-flex flex-column justify-content-end  p-4 ">
                        <h4 className="collectio_card_title">Art Collection</h4>
                        <p className="item_info">458 Items</p>
                      </div>
                      <img className="img-fluid" src={require("../..//images/banner/collection_2.png")} alt="error !" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="row">
            <div className="col-12 col-md-6 order-1 order-md-2  mb-4  mb-lg-0">
              <div className=" collection_box collection_box_medium">
                <Link to="pages/explore.html">
                  <div className="overlay d-flex flex-column justify-content-end  p-4 ">
                    <h4 className="collectio_card_title">Autumn Art Concept</h4>
                    <p className="item_info">458 Items</p>
                  </div>
                  <img className="img-fluid" src={require("../../images/banner/collection_4.png")} alt="error !" />
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 order-2 order-md-1  mb-4  mb-lg-0">
              <div className="row">   
                <div className="col-6">
                  <div className=" collection_box collecton_bo    x_small">
                    <Link to="pages/explore.html">
                      <div className="overlay d-flex flex-column justify-content-end  p-4 ">
                        <h4 className="collectio_card_title">Art Collection</h4>
                        <p className="item_info">458 Items</p>
                      </div>
                      <img className="img-fluid" src={require("../../images/banner/collection_6.png")} alt="error !" />
                    </Link>
                  </div>
                </div>
                <div className="col-6">
                  <div className=" collection_box collecton_box_small">
                    <Link to="pages/explore.html">
                      <div className="overlay d-flex flex-column justify-content-end  p-4 ">
                        <h4 className="collectio_card_title">Art Collection</h4>
                        <p className="item_info">458 Items</p>
                      </div>
                      <img className="img-fluid" src={require("../../images/banner/collection_5.png")} alt="error !" />
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

export default PopularCollectionSection;